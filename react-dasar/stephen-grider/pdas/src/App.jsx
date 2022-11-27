import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import Alexa from "./assets/images/alexa.png";
import Cortana from "./assets/images/cortana.png";
import Siri from "./assets/images/siri.png";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Digital Personal Assistent</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@Alexa"
                image={Alexa}
                description="Alex dibuat oleh amazon. dia dapat membantu anda dalam berbelanja"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@Cortana"
                image={Cortana}
                description="Cortana dibuat oleh microsoft. dia dapat membantu anda dalam mengoperasikan windows"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@Siri"
                image={Siri}
                description="Siri dibuat oleh apple. dia dapat membantu anda dalam menemukan aplikasi terbaik di ios store"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
