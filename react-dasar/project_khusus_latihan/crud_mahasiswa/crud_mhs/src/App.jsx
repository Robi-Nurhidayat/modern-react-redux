import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MahasiswaCreate from "./components/mahasiswa/MahasiswaCreate";
import MahasiswaEdit from "./components/mahasiswa/MahasiswaEdit";

import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import MahasiswaPage from "./pages/MahasiswaPage";

const App = () => {
  return (
    <div className="grid h-full" style={{ gridTemplateColumns: "1fr 2fr" }}>
      <Sidebar />
      <section className="pl-5 pt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* mahasiswa */}
          <Route path="/mahasiswa" element={<MahasiswaPage />} />
          <Route path="/mahasiswa/tambah" element={<MahasiswaCreate />} />
          <Route path="/mahasiswa/edit/:id" element={<MahasiswaEdit />} />
          {/* end of mahasiswa */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
