import { useState } from "react";
import Header from "./components/Header";
import ResultsList from "./components/ResultsList";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidDuration = userInput.duration > 0;
  const handleInputChange = (e) => {
    setUserInput((prevData) => {
      const data = { ...prevData, [e.target.name]: +e.target.value };
      return data;
    });
  };
  return (
    <>
      <Header />
      <UserInput
        onInputChange={handleInputChange}
        userInput={userInput}
      ></UserInput>
      {isValidDuration ? (
        <ResultsList input={userInput}></ResultsList>
      ) : (
        <p className="center">Please enter a duration greater than zero</p>
      )}
    </>
  );
}

export default App;
