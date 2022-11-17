import React from "react";
import { Provider } from "react-redux";
import Shoes from "./assets/app/features/shoes/Shoes";
import store from "./assets/app/store";
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
