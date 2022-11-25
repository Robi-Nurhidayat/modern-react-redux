import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "./postSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && userId) {
      dispatch(
        addPost({
          id: new Date().toLocaleDateString(),
          title: title,
          content: content,
          userId: Number(userId),
          time: new Date().toISOString(),
        })
      );

      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    }
  };
  return (
    <div className="border p-4 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-2">
          <label className="font-md text-md mb-0.5 font-medium text-gray-600">
            Title
          </label>
          <input
            type={"text"}
            className="outline-none rounded-sm border px-2 py-1.5"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-md text-md mb-0.5 font-medium text-gray-600">
            Penulis
          </label>
          <select
            className="outline-none rounded-sm border px-2 py-1.5"
            onChange={(e) => setUserId(e.target.value)}
          >
            <option>--Pilih Penulis--</option>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
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
            onChange={(e) => setContent(e.target.value)}
            value={content}
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
