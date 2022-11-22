import React from "react";

const AddPost = () => {
  return (
    <div className="border p-4 mx-auto">
      <form>
        <div className="flex flex-col">
          <label>Title</label>
          <input type={"text"} className="outline-none border" />
        </div>
      </form>
    </div>
  );
};

export default AddPost;
