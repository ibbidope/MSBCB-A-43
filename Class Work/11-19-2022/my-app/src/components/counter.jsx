import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrmnt = () => {
    if (count === "ZERO") {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };
  const dcrmnt = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount("ZERO");
    }
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
