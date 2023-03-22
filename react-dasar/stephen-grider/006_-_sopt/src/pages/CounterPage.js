import { useState, useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
// +

function reducer(state, action) {
  //
  return {
    ...state,
    count: state.count + 1,
  };
}

function CounterPage({ initialCount }) {
  // const { count, increment } = useCounter(initialCount);

  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0,
  });
  const increment = () => {
    dispatch();
  };

  function decrement() {
    // setCount(count - 1);
  }

  function handleChange(e) {
    const value = parseInt(e.target.value) || 0;

    // setValueToAdd(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  }
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type={"number"}
          className="outline-none py-1 px-2 border w-4/12 "
          value={state.valueToAdd || ""}
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
