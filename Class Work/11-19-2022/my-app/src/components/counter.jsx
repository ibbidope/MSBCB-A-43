import "./style.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrmnt = () => {
    /*if (count === "ZERO") {
      setCount(1);
    } else {
      setCount(count + 1);
    }*/
    setCount(count + 1);
  };
  const dcrmnt = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  return (
    <div>
      <span className={count === 0 ? "zero" : "nonzero"}>
        {count === 0 ? "zero" : count}
      </span>
      <button onClick={incrmnt}>Increment</button>
      <button onClick={dcrmnt}>Decrement</button>
    </div>
  );
};

export default Counter;
