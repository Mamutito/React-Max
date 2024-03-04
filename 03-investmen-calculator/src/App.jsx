import { useState } from "react";
import Header from "./components/Header";
import ResultsList from "./components/ResultsList";
import UserInput from "./components/UserInput";

function App() {
  const [annualData, setAnnualData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const handleInputChange = (e) => {
    setAnnualData((prevData) => {
      const data = { ...prevData, [e.target.name]: e.target.value };
      return data;
    });
  };
  return (
    <>
      <Header />
      <UserInput
        onInputChange={handleInputChange}
        annualData={annualData}
      ></UserInput>
      <ResultsList annualData={annualData}></ResultsList>
    </>
  );
}

export default App;
