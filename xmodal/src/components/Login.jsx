import { useState } from "react";
import styles from "./Login.module.css";
import ModalSet from "./Modal/Modal";
import Form from "./Form/Form";
const Login = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <h1>User Details Modal</h1>
        <button onClick={() => setOpenModal(true)}>Open Form</button>
        <ModalSet isOpen={openModal} setIsOpen={setOpenModal}>
          {<Form setOpenModal={setOpenModal} />}
        </ModalSet>
      </div>
    </>
  );
};
export default Login;
