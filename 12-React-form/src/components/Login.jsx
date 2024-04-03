import { useInput } from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import Input from "./Input";

export default function Login() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: hasEmailError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePassworChange,
    hasError: hasPasswordError,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasEmailError || hasPasswordError) {
      return;
    }
    console.log(emailValue, passwordValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          labelText="Email"
          id="email"
          error={hasEmailError && "Please enter a valid email address"}
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailChange}
        />

        <Input
          labelText="Password"
          id="password"
          error={hasPasswordError && "Please enter a valid password"}
          type="password"
          name="password"
          value={passwordValue}
          onBlur={handlePasswordBlur}
          onChange={handlePassworChange}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
