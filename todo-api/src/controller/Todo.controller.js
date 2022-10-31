import Todo from "../model/Todo.model.js";

class TodoController {
  static todoList = (req, res) => {
    Todo.find((error, todos) => {
      if (error) {
        res.status(500).json({ status: 500, message: "Bad Request" })
      } else {
        res.status(200).json(todos)
      }
    })
  }

  static todoRegister = (req, res) => {
    let todo = new Todo(req.body)

    todo.save((error) => {
      if (error) {
        res.status(500).send({ message: `${error.message} -Failed to register` })
      } else {
        res.status(201).send(todo.toJSON())
      }
    })
  }

  static todoUptade = (req, res) => {
    const id = req.params.id

    Todo.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: 'Successfully updated' })
      } else {
        res.status(500).send({ message: error.message })
      }
    })
  }

  static todoDelete = (req, res) => {
    const id = req.params.id

    Todo.findByIdAndDelete(id, (error) => {
      if (!error) {
        res.status(200).send({ message: "Successfully removed" })
      } else {
        res.status(500).send({ message: error.message })
      }
    })
  }
}

export default TodoController