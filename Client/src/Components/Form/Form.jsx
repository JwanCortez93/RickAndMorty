import { useState } from "react";
import { validateEmail, validatePassword } from "./validation";

export function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userError: "",
    passwordError: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailStatus = validateEmail(userData.email);
    const passwordStatus = validatePassword(userData.password);
    setErrors({
      userError: emailStatus,
      passwordError: passwordStatus,
    });
    if (!errors.userError && !errors.passwordError) {
      login(userData);
    }
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input type="text" name="email" onChange={handleChange}></input>
      {errors.userError ? <p>{errors.userError}</p> : null}
      <label htmlFor="password">Password: </label>
      <input type="text" name="password" onChange={handleChange}></input>
      {errors.passwordError ? <p>{errors.passwordError}</p> : null}
      <button type="submit">Submit</button>
    </form>
  );
}
