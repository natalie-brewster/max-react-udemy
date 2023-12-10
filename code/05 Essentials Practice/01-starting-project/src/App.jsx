import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import UserInput from "./components/UserInput";
import InvestmentTable from "./components/InvestmentTable";

const INPUTS = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 2,
};

function addSpaceBeforeUppercase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function App() {
  const [inputs, setInputs] = useState(INPUTS);

  function handleInputChange(label, value) {

    const updatedInputs = { ...inputs, [label]: value };
    console.log(updatedInputs);
    setInputs(updatedInputs);
  }

  return (
    <>
      <Header />
      <div id="user-input">
        <InputGroup className="input-group">
          {Object.entries(INPUTS).map(([label, value]) => (
            <UserInput
              key={label}
              initialInput={value}
              onInputChange={handleInputChange}
            >
              {addSpaceBeforeUppercase(label)}
            </UserInput>
          ))}
        </InputGroup>
      </div>
      <InvestmentTable userInputs={inputs} />
    </>
  );
}

export default App;
