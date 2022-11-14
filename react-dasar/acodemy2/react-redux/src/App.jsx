import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";
import Shoes from "./components/Shoes";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Shoes />
      </div>
    </Provider>
  );
};

export default App;
