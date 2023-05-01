import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MahasiswaContext = createContext();

function Provider({ children }) {
  const navigate = useNavigate();
  const [mahasiswa, setMahasiswa] = useState([]);
  const getAllMahasiswa = async () => {
    const { data } = await axios.get(`http://localhost:4000/mahasiswa`);
    setMahasiswa(data);
  };

  const createMahasiswa = async (nim, nama, kelas, no_hp) => {
    const { data } = await axios.post(`http://localhost:4000/mahasiswa`, {
      nim,
      nama,
      kelas,
      no_hp,
    });

    const addMhs = [...mahasiswa, data];

    setMahasiswa(addMhs);
    navigate("/mahasiswa");
  };

  const updateMahasiswa = async (id, nim, nama, kelas, no_hp) => {
    const { data } = await axios.put(`http://localhost:4000/mahasiswa/${id}`, {
      nim,
      nama,
      kelas,
      no_hp,
    });
  };
  const valueToShare = {
    mahasiswa,
    getAllMahasiswa,
    createMahasiswa,
  };
  return (
    <MahasiswaContext.Provider value={valueToShare}>
      {children}
    </MahasiswaContext.Provider>
  );
}

export { Provider };

export default MahasiswaContext;
