import React from "react";

const AddPost = () => {
  return (
    <div className="border p-4 mx-auto">
      <form>
        <div className="flex flex-col mb-2">
          <label className="font-md text-md mb-0.5 font-medium text-gray-600">
            Title
          </label>
          <input
            type={"text"}
            className="outline-none rounded-sm border px-2 py-1.5"
            placeholder="Title"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-md text-md mb-0.5 font-medium text-gray-600">
            Penulis
          </label>
          <select className="outline-none rounded-sm border px-2 py-1.5">
            <option>--Pilih Penulis--</option>
            <option value={"1"}>Penulis 1</option>
            <option value={"2"}>Penulis 2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-md text-md mb-0.5 font-medium text-gray-600">
            Content
          </label>
          <textarea
            cols={30}
            rows={10}
            className="outline-none border px-2 py-1.5 rounded-sm"
            placeholder="content"
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white font-bold rounded mt-4 w-full hover:bg-blue-600 "
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
