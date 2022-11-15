import { Provider } from "react-redux";
import store from "./counter/store";
import Counter from "./counter/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Shoes />
        <ShoesHook />
        <Gloves /> */}
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
