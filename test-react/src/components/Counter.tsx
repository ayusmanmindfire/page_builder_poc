import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "200px", margin: "0 auto" }}>
      <h2>Counter</h2>
      <p style={{ fontSize: "24px", margin: "10px 0" }}>{count}</p>
      <div>
        <button
          style={{ margin: "5px", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{ margin: "5px", padding: "10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;