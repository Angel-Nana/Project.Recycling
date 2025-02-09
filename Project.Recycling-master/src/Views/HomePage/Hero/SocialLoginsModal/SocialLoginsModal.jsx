import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import LoginItems from "./LoginItems";

export default function SocialLoginsModal({ open, handleCloseModal }) {
  return (
    <div>
      <Modal unmountOnClose isOpen={open}>
        <ModalHeader className="bg-primary  text-white">Login</ModalHeader>
        <ModalBody><LoginItems/></ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
