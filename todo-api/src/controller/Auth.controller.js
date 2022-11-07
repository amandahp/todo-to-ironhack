import bcrypt from "bcryptjs";
import User from "../model/User.model.js";
import jwt from "jsonwebtoken";

class AuthController {

  static authRegister = async (req, res, next) => {
    const { email, password, name } = req.body;
    const error = () => res.status(400).json({ message: 'Some field is empty or wrong' });
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    const foundUser = await User.findOne({ email });
    const salt = bcrypt.genSaltSync(10);

    if (!email || !password || !name) {
      error()
      return;
    }
    if (!emailRegex.test(email)) {
      error()
      return;
    }
    if (!passwordRegex.test(password)) {
      error()
      return;
    }
    if (foundUser) {
      res.status(400).json({
        message: 'User already exists'
      })
      return;
    }

    const passwordHash = bcrypt.hashSync(password, salt)
    const createdUser = await User.create({ email, passwordHash, name })

    const { _id } = createdUser
    createdUser.save((error) => {
      if (error) {
        res.status(500).send({ message: `${error.message} -Failed to register` })
      } else {
        res.status(201).json({ email, name, _id })
      }
    })
  }

  static authLogin = async (req, res) => {
    const { email, password } = req.body
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      res.status(400).json({
        message: 'User do not exist'
      })
      return;
    }
    const { passwordHash } = foundUser;
    const validPassword = bcrypt.compareSync(password, passwordHash);

    if (!validPassword) {
      res.status(400).json({
        message: 'Wrong password'
      })
      return;
    }
    const token = jwt.sign({ email }, '123', { expiresIn: '7 days' });
    res.status(200).json({ token });
  }
}

export default AuthController;