import React, { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [formData, setFormData] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        formData,
        setFormData,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
