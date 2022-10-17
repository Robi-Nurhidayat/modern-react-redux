function App() {
  const foods = [
    {
      nama: "bakso",
      harga: 12000,
      kategori: "kuah",
      deskripsi: "semua makanan enak ko ...",
    },
    {
      nama: "Basreng",
      harga: 1000,
      kategori: "kering",
      deskripsi: "semua makanan enak ko ...",
    },
    {
      nama: "mie ayam",
      harga: 8000,
      kategori: "kuah",
      deskripsi: "semua makanan enak ko ...",
    },
    {
      nama: "martabak",
      harga: 22000,
      kategori: "kering",
      deskripsi: "semua makanan enak ko ...",
    },
  ];

  const renderFoods = foods.map((food) => {
    return (
      <div className="card mt-5" style={{ width: "18rem" }}>
        <div className="card-header">{food.nama}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{food.harga}</li>
          <li className="list-group-item">{food.kategori}</li>
          <li className="list-group-item">{food.deskripsi}</li>
        </ul>
      </div>
    );
  });
  return (
    <div className="container">
      <div>{renderFoods}</div>
      <div className="mt-5">
        <button className="btn btn-primary m-3" onClick={() => alert()}>
          Kering
        </button>
        <button className="btn btn-secondary">Kuah</button>
      </div>
    </div>
  );
}

export default App;
