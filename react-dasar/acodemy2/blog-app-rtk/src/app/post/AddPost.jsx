import React from "react";

const AddPost = () => {
  return (
    <div className="border border-gray-300 p-6 rounded-sm">
      <h1 className="font-bold text-xl mb-5">Add Post</h1>
      <form>
        <div className="flex flex-col mb-4">
          <label className="text-md">Title</label>
          <input
            type={"text"}
            className="border outline-none py-2 px-3 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-md">Penulis</label>
          <select className="border outline-none py-2 px-3 rounded">
            <option>Penulis 1</option>
            <option>Penulis 1</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-md">Content</label>
          <textarea
            className="border outline-none py-2 px-3 rounded"
            cols={"30"}
            rows="10"
          ></textarea>
        </div>
        <button className="py-1.5 px-4 text-white font-bold text-md rounded w-full bg-blue-400 mt-4">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPost;
