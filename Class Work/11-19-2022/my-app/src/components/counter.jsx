import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrmnt = () => {
    setCount(count + 1);
  };
  const dccrmnt = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={incrmnt}>Increment</button>
      <button onClick={dccrmnt}>Decrement</button>
    </div>
  );
};

export default Counter;
