import { createContext, useState } from "react";
import axios from "axios";

const MahasiswaContext = createContext();

function Provider({ children }) {
  const [mahasiswa, setMahasiswa] = useState([]);
  const getAllMahasiswa = async () => {
    const { data } = await axios.get(`http://localhost:4000/mahasiswa`);
    setMahasiswa(data);
  };

  const valueToShare = {
    mahasiswa,
    getAllMahasiswa,
  };
  return (
    <MahasiswaContext.Provider value={valueToShare}>
      {children}
    </MahasiswaContext.Provider>
  );
}

export { Provider };

export default MahasiswaContext;
