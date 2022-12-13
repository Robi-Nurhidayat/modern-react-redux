import { createContext } from "react";

const UsersContext = createContext();

function Provider({ children }) {
  return <UsersContext>{children}</UsersContext>;
}

export { Provider };
export default UsersContext;
