import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="m-3">
      <h1 className="text-primary my-3">Counter App</h1>
      <div>
        <button
          className={
            counter >= 10
              ? "btn btn-danger mx-2 disabled"
              : "btn btn-success mx-2"
          }
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increment
        </button>
        <button
          className={
            counter <= 0
              ? "btn btn-danger mx-2 disabled"
              : "btn btn-secondary mx-2"
          }
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Decrement
        </button>
      </div>
      <h4 className="m-3">
        Count: <span className="badge bg-primary"> {counter} </span>
      </h4>
    </div>
  );
}

export default Counter;
