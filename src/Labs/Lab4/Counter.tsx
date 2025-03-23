import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <Button
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        variant="success"
        className="me-2"
      >
        Up
      </Button>
      <Button
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        variant="danger"
      >
        Down
      </Button>
      <hr />
    </div>
  );
}
