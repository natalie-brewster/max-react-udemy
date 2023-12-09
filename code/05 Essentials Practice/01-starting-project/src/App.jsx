import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import UserInput from "./components/UserInput";
import InvestmentTable from "./components/InvestmentTable";


const INPUTS = [
  {
    label: "Initial Investment",
    value: 1000,
  },
  {
    label: "Anual Investment",
    value: 1200,
  },
  {
    label: "Expected Return",
    value: 6,
  },
  {
    label: "Duration",
    value: 10,
  },
];

function App() {
  const [inputs, setInputs] = useState(INPUTS);

  function handleInputChange(curInput) {
    const { label, value } = curInput;
    const updatedInputs = inputs.map(function(input) {
      if (label === input.label) {
        return {...input, value: value};
      } else {
        return input
      }
    });
    console.log(updatedInputs)
    setInputs(updatedInputs);
  }

  return (
    <>
      <Header />
      <div id="user-input">
        <InputGroup className="input-group">
          {INPUTS.map((input) => (
            <UserInput
              key={input.label}
              initialInput={input.value}
              onInputChange={handleInputChange}
            >
              {input.label}
            </UserInput>
          ))}
        </InputGroup>
      </div>
      <InvestmentTable userInputs={inputs} />
    </>
  );
}

export default App;
