import { useRef, useState } from "react";

export default function RefLogin() {
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredValues = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(enteredValues);
  };

  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const handleInputChange = (id) => {
    setDidEdit((prevEdit) => ({ ...prevEdit, [id]: false }));
  };

  const handleInputBlur = (id) => {
    setDidEdit((prevEdit) => ({ ...prevEdit, [id]: true }));
  };

  const emailIsInvalid = didEdit.email && !email.current.value.includes("@");

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
            onChange={() => handleInputChange("email")}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
