import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
// +

function CounterPage({ initialCount }) {
  // const { count, increment } = useCounter(initialCount);

  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  function decrement() {
    setCount(count - 1);
  }

  function handleChange(e) {
    const value = parseInt(e.target.value) || 0;

    setValueToAdd(value);
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form className="flex flex-col gap-2">
        <label>Add a lot!</label>
        <input
          type={"number"}
          className="outline-none py-1 px-2 border w-4/12 "
          value={valueToAdd || ""}
          onChange={handleChange}
        />
        <div>
          <Button>Add it!</Button>
        </div>
      </form>
    </Panel>
  );
}

export default CounterPage;
