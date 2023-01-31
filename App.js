import React, { useState } from "react";
import "./Style.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="Count">
        <h1>Count</h1>
      </div>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
      <span>{count}</span>
      <h2>
        ("THIS ASSIGNMENT IS DONE BY AVINASH KUMAR REGISTRATION NO 12005810 ")
      </h2>
    </div>
  );
};

export default App;
