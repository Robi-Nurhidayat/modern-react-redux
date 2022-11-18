import React from "react";
import { Provider } from "react-redux";
import Shoes from "./assets/app/features/shoes/Shoes";
import User from "./assets/app/features/user/User";
import store from "./assets/app/store";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Shoes /> */}
        <User />
      </div>
    </Provider>
  );
};

export default App;
