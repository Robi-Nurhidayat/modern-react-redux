import { createContext, useState } from "react";
import axios from "axios";

const UsersContext = createContext();

function Provider({ children }) {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getAllUsers();
  };

  const createUser = async (fullName, email, gender) => {
    await axios.post("http://localhost:5000/users", {
      name: fullName,
      email: email,
      gender: gender,
    });
  };

  const getUserById = async (id, setFullName, setEmail, setGender) => {
    const { data } = await axios.get(`http://localhost:5000/users/${id}`);
    setFullName(data.name);
    setEmail(data.email);
    setGender(data.gender);
  };

  const updateUser = async (id, fullName, email, gender) => {
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: fullName,
        email,
        gender,
      });
      getAllUsers();
    } catch (e) {
      console.log(e);
    }
  };
  const valueToShare = {
    users,
    getAllUsers,
    deleteUser,
    createUser,
    getUserById,
    updateUser,
  };

  return (
    <UsersContext.Provider value={valueToShare}>
      {children}
    </UsersContext.Provider>
  );
}

export { Provider };
export default UsersContext;
