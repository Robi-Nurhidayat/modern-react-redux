import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Robi"
        timeAgo="Today at 06:00AM"
        text="Amazing this post"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Adi"
        timeAgo="Today at 08:00AM"
        text="Great Job !"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Asep"
        timeAgo="Yesterday at 10:00PM"
        text="nice info!!!!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Fauzan"
        timeAgo="Monday at 06:00AM"
        text="Not bad"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
