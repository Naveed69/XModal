import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalSet({ isOpen, setIsOpen, children }) {
  const handleClose = () => {
    setIsOpen(false);
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark semi-transparent background
      backdropFilter: "blur(8px)", // Blurs the background
    },
    content: {
      width: "80%",
      maxWidth: "500px",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      height: "fit-content",
      maxHeight: "90vh",
      background: "white",
      border: "1px solid #ccc",
      borderRadius: "15px",
      padding: "2rem",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      {children}
    </Modal>
  );
}
export default ModalSet;
