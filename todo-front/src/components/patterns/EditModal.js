import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button, Input
} from '@chakra-ui/react';

const ModalComponent = ({ isOpen, onClose, onSubmit, value, text, key, onChange, onClick }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Your Todo</ModalHeader>
        <ModalCloseButton />
        <form>
          <ModalBody>
            <Input
              value={text}
              key={key}
              variant="outline"
              type="text"
              placeholder="Update your todo..."
              onChange={(e) => onChange(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClick}>
              Close
            </Button>
            <Button type="button" onClick={() => onSubmit(value._id, value)} colorScheme="teal" mr={3}>
              Update
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )

}


export default ModalComponent