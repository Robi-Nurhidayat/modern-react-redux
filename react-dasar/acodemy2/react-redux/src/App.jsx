import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";
import Shoes from "./components/Shoes";
import ShoesHook from "./components/ShoesHook";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Shoes />
        <ShoesHook />
      </div>
    </Provider>
  );
};

export default App;
