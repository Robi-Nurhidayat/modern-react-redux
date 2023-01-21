import React from "react";
import FormUser from "./assets/components/FormUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormStepTwo from "./assets/components/FormStepTwo";

const App = () => {
  return (
    // <Router>
    <div>
      <FormUser />
    </div>

    //   <div>
    //     <Routes>
    //       <Route path="/" element={<FormUser />} />
    //       <Route path="/step-two" element={<FormStepTwo />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
