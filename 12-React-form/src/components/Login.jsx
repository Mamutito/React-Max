import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({ email: false, password: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(enteredValues);
  };

  const handleInputChange = (id, value) => {
    setEnteredValues((prevState) => ({ ...prevState, [id]: value }));
    setDidEdit((prevEdit) => ({ ...prevEdit, [id]: false }));
  };

  const handleInputBlur = (id) => {
    setDidEdit((prevEdit) => ({ ...prevEdit, [id]: true }));
  };

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          labelText="Email"
          id="email"
          error={emailIsInvalid && "Please enter a valid email address"}
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          value={enteredValues.email}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />

        <Input
          labelText="Password"
          id="password"
          error={passwordIsInvalid && "Please enter a valid password"}
          type="password"
          name="password"
          value={enteredValues.password}
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
