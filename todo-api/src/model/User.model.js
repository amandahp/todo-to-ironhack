import moongose from "mongoose";

const userScheema = new moongose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required']
    },
    name: {
      type: String,
      required: [true, 'Name is required']
    }
  },
  {
    timestamps: true
  }
);

const User = moongose.model('user', userScheema);

export default User;