import React, { useState } from "react";

const foods = [
  {
    nama: "Ayam Bakar",
    kategori: "bakar",
  },

  {
    nama: "Ayam Goreng",
    kategori: "goreng",
  },
  {
    nama: "Ikan Bakar",
    kategori: "bakar",
  },

  {
    nama: "Ikan Goreng",
    kategori: "goreng",
  },

  {
    nama: "Sate Bakar",
    kategori: "bakar",
  },

  {
    nama: "Sate Goreng",
    kategori: "goreng",
  },
];

const Makanan = () => {
  const [select, setSelect] = useState("");

  const renderFood = (kategori = "") => {
    const fullFoods = foods.map((food) => {
      return <h2 key={food.nama}>{food.nama}</h2>;
    });

    const foodsByFilter = foods.map((food) => {
      if (food.kategori === kategori) {
        return <h2 key={food.nama}>{food.nama}</h2>;
      }
    });
    return !kategori ? fullFoods : foodsByFilter;
  };
  return (
    <div>
      {renderFood(select)}
      <button onClick={() => setSelect("goreng")}>Goreng</button>
      <button onClick={() => setSelect("bakar")}>Bakar</button>
    </div>
  );
};

export default Makanan;
