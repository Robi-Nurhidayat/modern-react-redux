import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetails";
import AprovalCard from "./AprovalCard";
import SegmentChild from "./SegmentChild";

const App = () => {
  return (
    // <div className="ui container comments">
    //   <AprovalCard>
    //     <CommentDetail
    //       author="Fauzan"
    //       timeAgo="Monday at 06:00AM"
    //       text="Not bad"
    //       avatar={faker.image.avatar()}
    //     />
    //   </AprovalCard>

    //   <AprovalCard>
    //     <CommentDetail
    //       author="Asep"
    //       timeAgo="Yesterday at 10:00PM"
    //       text="nice info!!!!"
    //       avatar={faker.image.avatar()}
    //     />
    //   </AprovalCard>
    //   <AprovalCard>
    //     <CommentDetail
    //       author="Adi"
    //       timeAgo="Today at 08:00AM"
    //       text="Great Job !"
    //       avatar={faker.image.avatar()}
    //     />
    //   </AprovalCard>
    // </div>

    <div>
      <SegmentChild>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
          No documents are listed for this customer.
        </div>
        <div className="ui primary button">Add Document</div>
      </SegmentChild>
      <SegmentChild>
        <h4 className="ui header">For Your Information</h4>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
      </SegmentChild>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
