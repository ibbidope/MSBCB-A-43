import "../App.css";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const incrmnt = () => {
    setCount(count + 1);
  };
  const dcrmnt = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  return (
    <div class="d-flex align-items-center">
      <span className={count === 0 ? "zero" : "nonzero"}>
        {count === 0 ? "zero" : count}
      </span>
      <button class="btn btn-success" onClick={incrmnt}>
        Increment
      </button>
      <button class="btn btn-danger" onClick={dcrmnt}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
