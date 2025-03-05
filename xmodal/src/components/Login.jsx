import { useState } from "react";
import styles from "./Login.module.css";
import ModalSet from "./Modal/Modal";
const Login = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <h1>User Details Modal</h1>
      <button onClick={() => setOpenModal(true)}>Open Form</button>
      <ModalSet isOpen={openModal} setIsOpen={setOpenModal}>
        {<h1>Hello</h1>}
      </ModalSet>
    </>
  );
};
export default Login;
