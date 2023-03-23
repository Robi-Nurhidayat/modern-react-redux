import { useState, useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const VALUE_TO_ADD = "value_to_add";
const ADD_A_LOT = "add_a_lot";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ADD_A_LOT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      return state;
  }
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
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  function decrement() {
    dispatch({
      type: DECREMENT_COUNT,
    });
  }

  function handleChange(e) {
    const value = parseInt(e.target.value) || 0;

    // setValueToAdd(value);

    dispatch({
      type: VALUE_TO_ADD,
      payload: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch({
      type: ADD_A_LOT,
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  }

  console.log(state.valueToAdd);
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
