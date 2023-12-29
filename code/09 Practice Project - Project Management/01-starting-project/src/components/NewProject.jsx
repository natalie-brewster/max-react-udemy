import { useRef, useState } from "react";
import Input from "./Input";

export default function NewProject({showForm, toggleForm}) {
  const form = {
    title: "",
    description: "",
    dueDate: "",
  };

  const [formResponses, setFormResponses] = useState(form);

  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDueDate = useRef();

  function handleForm() {
    setFormResponses((prevFormResponses) => ({
      ...prevFormResponses,
      title: inputTitle.current.value,
      description: inputDescription.current.value,
      dueDate: inputDueDate.current.value,
    }));
    console.log(formResponses);
  }

  return (
    <form className="mt-4 text-right">
      <button className="text-stone-700 hover:text-red-500">Cancel</button>
      <button
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        onClick={toggleForm}
      >
        Save
      </button>
      <Input
        label="Title"
        type="text"
        handleChange={handleForm}
        ref={inputTitle}
      />
      <Input
        label={"Description"}
        type="text"
        handleChange={handleForm}
        ref={inputDescription}
      />
      <Input
        label={"Due Date"}
        type="date"
        handleChange={handleForm}
        ref={inputDueDate}
      />
    </form>
  );
}
