import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  let [isDarkTheme, setDarkTheme] = useState(false);
  let [authToken, setAuthToken] = useState(true);
  const data = {
    isDarkTheme,
    authToken,
    setAuthToken,
    setDarkTheme,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContext;
