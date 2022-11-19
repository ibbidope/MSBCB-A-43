import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={handler}>Increment</button>
    </div>
  );
};

export default Counter;
