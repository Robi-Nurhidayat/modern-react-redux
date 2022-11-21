import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "./postSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && content && userId) {
      alert("Post has been created");
      setTimeout(() => {
        dispatch(
          addPost({
            id: nanoid(),
            title: title,
            content: content,
            userId: userId,
          })
        );
        navigate("/");
      }, 2000);
      setTitle("");
      setUserId("");
      setContent("");
    } else {
      alert("Data harus di isi semua");
    }
  };
  return (
    <div className="border border-gray-300 p-6 rounded-sm">
      <h1 className="font-bold text-xl mb-5">Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label className="text-md">Title</label>
          <input
            type={"text"}
            className="border outline-none py-2 px-3 rounded"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-md">Penulis</label>
          <select
            onChange={(e) => setUserId(e.target.value)}
            className="border outline-none py-2 px-3 rounded"
          >
            <option>--Pilih Penulis--</option>
            <option value={"1"}>Penulis 1</option>
            <option value={"2"}>Penulis 2</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-md">Content</label>
          <textarea
            className="border outline-none py-2 px-3 rounded"
            cols={"30"}
            rows="10"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="Content"
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
