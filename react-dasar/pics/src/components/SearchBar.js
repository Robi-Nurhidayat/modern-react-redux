import { render } from "@testing-library/react";
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
