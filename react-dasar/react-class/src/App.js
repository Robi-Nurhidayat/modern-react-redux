import React from "react";
import SeasonsDisplay from "./SeasonsDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        Latitude : {this.state.lat} <br />
        Errors : {this.state.errorMessage}
      </div>
    );
  }
}

export default App;
