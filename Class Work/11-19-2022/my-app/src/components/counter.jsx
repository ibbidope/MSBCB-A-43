import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrmnt = () => {
    setCount(count + 1);
  };
  const dcrmnt = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={incrmnt}>Increment</button>
      <button onClick={dcrmnt}>Decrement</button>
    </div>
  );
};

export default Counter;
