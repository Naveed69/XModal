import { useState } from "react";
import styles from "./Form.module.css";
const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  const handle = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(formData.email)) {
      alert("Invalid email");
      return;
    }

    if (formData.phone.length != 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    const todayDate = new Date();
    const date = new Date(formData.dob);
    console.log(todayDate, formData.dob);

    if (date > todayDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
  };
  const handleChange = (e) => {
    const name1 = e.target.name;
    setFormData({ ...formData, [name1]: e.target.value });
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={(e) => handle(e)}>
          <h2>Fill Details</h2>
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Name"
            value={formData.username}
            id={styles.username}
            onChange={handleChange}
            required
          />
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            id={styles.email}
            onChange={handleChange}
            required
          />
          <label>Phone Number:</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter Number"
            value={formData.phone}
            id={styles.phone}
            onChange={handleChange}
            required
          />
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            id={styles.dob}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
