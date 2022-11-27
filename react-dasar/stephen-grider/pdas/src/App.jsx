import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import Alexa from "./assets/images/alexa.png";
import Cortana from "./assets/images/cortana.png";
import Siri from "./assets/images/siri.png";

const App = () => {
  return (
    <div>
      <div>Digital Personal Assistent</div>
      <ProfileCard title="Alexa" handle="@Alexa" image={Alexa} />
      <ProfileCard title="Cortana" handle="@Cortana" image={Cortana} />
      <ProfileCard title="Siri" handle="@Siri" image={Siri} />
    </div>
  );
};

export default App;
