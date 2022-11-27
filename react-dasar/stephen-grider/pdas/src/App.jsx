import React from "react";
import ProfileCard from "./components/ProfileCard";
import Alexa from "./assets/images/alexa.png";
import Cortana from "./assets/images/cortana.png";
import Siri from "./assets/images/siri.png";

const App = () => {
  return (
    <div>
      <div>Digital Personal Assistent</div>
      <ProfileCard title="Alexa" handle="@Alexa" />
      <ProfileCard title="Cortana" handle="@Cortana" />
      <ProfileCard title="Siri" handle="@Siri" />
    </div>
  );
};

export default App;
