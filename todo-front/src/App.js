import { VStack, Text, useToast } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { getTodo, postTodo, updateTodo, deleteTodo } from "./services";

const App = () => {
  const toast = useToast();
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const fetchTodos = useCallback(async () => {
    try {
      const data = await getTodo();
      setTodos(data);
    } catch (e) {
      setError(e)
    }
  }, []);

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos]);

  const addTodo = async (newTodo) => {
    try {
      console.log(newTodo)
      await postTodo(newTodo)
      fetchTodos()
    } catch (e) {
      setError(e)
    }
  };

  const todoDelete = async (id) => {
    try {
      await deleteTodo(id)
      fetchTodos()
    } catch (e) {
      setError(e)
    }
  };

  const editTodo = async (id, updatedTodo) => {
    try {
      await updateTodo(id, updatedTodo)
      fetchTodos()
    } catch (e) {
      setError(e)
    }
  };


  if (error) {
    toast({
      title: "Ops...Something is wrong! :C",
      status: "error",
      duration: 1000,
      isClosable: true,
    })
  };

  return (
    <VStack p={5}>

      <Text
        bgGradient='linear(to-r, teal.500, green.500)'
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold">
        Todo App
      </Text>

      <TodoList todos={todos} deleteTodo={todoDelete} editTodo={editTodo} />
      <AddTodo addTodo={addTodo} />


    </VStack>
  );
};

export default App;