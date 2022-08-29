import React from "react";
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // note: jangan banyak banyak menarut logika di metode render
  // oleh karena itu sebaiknya disimpen dengan menggunakan metode helper
  renderComponent() {
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonsDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderComponent()}</div>;
  }
}

export default App;
