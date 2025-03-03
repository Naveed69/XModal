import Modal from "react-modal";
const ModalSet = ({ isOpen, setOpenModal, children }) => {
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
      //   style={customStyles}
    >
      <h1>Hello Modal</h1>
    </Modal>
  );
};
export default ModalSet;
