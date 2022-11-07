import { Flex, Text, useToast } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { getTodo, postTodo, updateTodo, deleteTodo } from "../services";
import { useCookies } from "react-cookie";


export const Todo = () => {
  const toast = useToast();
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies();


  const fetchTodos = useCallback(async () => {
    try {
      const data = await getTodo(cookies.email);
      setTodos(data);
    } catch (e) {
      setError(e)
    }
  }, [cookies.email]);

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos]);

  const addTodo = async (newTodo) => {
    try {
      const userEmail = cookies.email;
      newTodo.userId = userEmail;
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
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >

      <Text
        bgGradient='linear(to-r, teal.500, green.500)'
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold">
        Todo App
      </Text>

      <TodoList todos={todos} deleteTodo={todoDelete} editTodo={editTodo} />
      <AddTodo addTodo={addTodo} />


    </Flex>
  );
};