import React from "react";

const Produk = () => {
  return (
    <div className="flex justify-between">
      <div className="menu-category basis-4 p-4 shadow-lg ">
        <div className="category-select flex justify-between gap-4 flex-row-reverse">
          <label>Makanan</label>
          <input type={"checkbox"} className="border outline-none" />
        </div>
        <div className="category-select flex justify-between gap-4 flex-row-reverse">
          <label>Minuman</label>
          <input type={"checkbox"} className="border outline-none" />
        </div>
        <div className="category-select flex justify-between gap-4 flex-row-reverse">
          <label>Mandi</label>
          <input type={"checkbox"} className="border outline-none" />
        </div>
      </div>
      <div className="content basis-8 flex-1 flex items-center justify-center flex-wrap gap-4">
        <div className="card px-4 p-2 shadow-2xl rounded">
          <div className="header">
            <h1>Title</h1>
          </div>
          <div className="body">
            <h5>harga</h5>
            <p>asd;kaf;smfmmmmmmmmmmm</p>
            <button className="px-4 py-1 bg-blue-400 rounded text-white">
              Add
            </button>
          </div>
        </div>
        <div className="card shadow-2xl">
          <div className="header">
            <h1>Title</h1>
          </div>
          <div className="body">
            <h5>harga</h5>
            <p>asd;kaf;smfmmmmmmmmmm</p>
          </div>
        </div>
        <div className="card shadow-2xl">
          <div className="header">
            <h1>Title</h1>
          </div>
          <div className="body">
            <h5>harga</h5>
            <p>asd;kaf;smfmmmmmmmmm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produk;
