import "./styles.css";
import { useState, useEffect } from "react";
import { useDebounce } from "./hooks";

export default function App() {
  const [value, setValue] = useState("");
  const returnDebounceValue = useDebounce(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(returnDebounceValue);
  }, [returnDebounceValue]);

  return (
    <div className="App">
      <input value={value} onChange={handleChange} />
    </div>
  );
}
