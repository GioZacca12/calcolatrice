import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");

  const write = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Errore");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input data-testid="input" type="text" value={input} />
      </div>
      <div className="buttons">
        <button onClick={() => write("1")}>1</button>
        <button onClick={() => write("2")}>2</button>
        <button onClick={() => write("3")}>3</button>
        <button onClick={() => write("+")}>+</button>

        <button onClick={() => write("4")}>4</button>
        <button onClick={() => write("5")}>5</button>
        <button onClick={() => write("6")}>6</button>
        <button onClick={() => write("-")}>-</button>

        <button onClick={() => write("7")}>7</button>
        <button onClick={() => write("8")}>8</button>
        <button onClick={() => write("9")}>9</button>
        <button onClick={() => write("*")}>*</button>

        <button onClick={() => write("0")}>0</button>
        <button onClick={clear}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => write("/")}>/</button>
      </div>
    </div>
  );
}

export default App
