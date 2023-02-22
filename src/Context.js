import { createContext, useContext, useState } from "react";
import data from "./data";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <AppContext.Provider
      value={{
        people,
        index,
        setIndex,
        setPeople,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(AppContext);
};
