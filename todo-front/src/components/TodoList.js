import {
  HStack, VStack, Checkbox, Flex, Badge
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';

import ModalComponent from './patterns/EditModal';


const TodoList = ({ todos, deleteTodo, editTodo }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [newTodo, setNewTodo] = useState('')

  const onClose = () => {
    setIsOpen(false)
  };

  const handleEditClick = (todo) => {
    setIsOpen(true)
    setNewTodo(todo.title)
  };

  const handleEditSubmit = (id, editedTodo) => {
    editedTodo.title = newTodo;
    editTodo(id, editedTodo);
    setIsOpen(false)
  };

  const checkTodo = (id, todo) => {
    todo.completed = !todo.completed
    editTodo(id, todo)
  }

  return (
    !todos.length ?
      <Badge
        colorScheme="teal"
        variant="outline"
        borderRadius="4"
        p='4' m='5'
      >No todos for Today!!</Badge>
      : (
        <VStack>
          {todos.map((todo) => (

            <HStack key={todo._id} spacing="24px" w="320px">
              <Flex p={6} w="300px" h="50px" justifyContent="space-between">
                <Checkbox onChange={() => checkTodo(todo._id, todo)} isChecked={todo.completed}>{todo.title}</Checkbox>
                <Flex w="10px" >
                  <DeleteIcon cursor="pointer" color="red.500" mr="2" onClick={() => deleteTodo(todo._id)} />
                  <EditIcon onClick={() => handleEditClick(todo)} />
                </Flex>

                <ModalComponent
                  isOpen={isOpen}
                  onClose={onClose}
                  onSubmit={handleEditSubmit}
                  onChange={setNewTodo}
                  onClick={onClose}
                  value={todo}
                  text={newTodo}
                />

              </Flex>
            </HStack>
          ))}

        </VStack>
      )
  )

};


export default TodoList;