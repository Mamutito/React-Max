import { useState } from "react";
import Input from "./Input";

const NewTask = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    onAdd(inputValue);
    setInputValue("");
  };
  return (
    <div className="flex items-center gap-4">
      <Input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="text-stone-600 hover:text-stone-950"
        onClick={handleAdd}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
