import moongose from "mongoose";

const todoScheema = new moongose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    userId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Todo = moongose.model('Todo', todoScheema);

export default Todo;