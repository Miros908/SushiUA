import React, { useState, memo } from "react";

import "./counter.scss";

export default memo(function Counter({ value = 0 }) {
  const [count, setCount] = useState(value);

  const increment = () => setCount((prev) => ++prev);

  function decrement() {
    setCount((prev) => {
      return Math.max(prev - 1, 0);
    });
  }

  return (
    <div className="counterWrapper">
      <button className="decrement" onClick={decrement} disabled={count === 0}>
        <span className="icon">-</span>
      </button>
      <div className="count">{count}</div>
      <button className="increment" onClick={increment}>
        <span className="icon">+</span>
      </button>
    </div>
  );
});
