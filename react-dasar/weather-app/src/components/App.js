import React from "react";
import Search from "./Search";

class App extends React.Component {
  onSearch = (city) => {
    console.log(city);
  };
  render() {
    return (
      <div className="App">
        <h1 className="text-3xl font-bold mt-2 text-center">
          Search Your Location
        </h1>
        <Search onSearch={this.onSearch} />
      </div>
    );
  }
}

export default App;
