import { useState } from "react";

export default function UserInput({ initialInput, onInputChange, children }) {
  
  const [userInput, setUserInput] = useState(initialInput);

  function handleChange(event) {
    const curInput = Number(event.target.value)
    setUserInput(curInput);
    onInputChange({
      label: children,
      value: curInput
    })
  }

  return (
    <div>
      <label>{children}</label>
      <input
        type="number"
        required
        value={userInput}
        onChange={handleChange}
      />
      {/* <label>Initial Investment</label> */}
      <p>{userInput}</p>
    </div>
  );
}
