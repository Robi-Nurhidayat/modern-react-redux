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
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lat : {this.state.lat}</div>;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    return <div>Loading!</div>;
  }
}

export default App;
