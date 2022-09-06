import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import Search from "./Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  onSearch = async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c30a5bb4da82a5133a4d75e2554363ba`
    );

    const { main, description } = response.data.weather[0];

    console.log(main);
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
