import { useState } from "react";
import styles from "./Login.module.css";
import ModalSet from "./Modal/ModalSet";
const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <h1>User Details Modal</h1>
      <button onClick={() => setOpenModal(true)}> Open Form</button>
      <ModalSet open={openModal} children={<>Hello</>} />
    </>
  );
};
export default Login;
