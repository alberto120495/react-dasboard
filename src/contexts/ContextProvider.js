import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const useStateContext = () => useContext(StateContext);

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export { ContextProvider, useStateContext };
