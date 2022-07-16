import { useContext } from "react";
import { AppContext } from "context";
const useStore = () => {
  const { authContext, setAuthContext, isDarkTheme, setDarkTheme } =
    useContext(AppContext);
  const store = { authContext, isDarkTheme };
  const actions = { setAuthContext, setDarkTheme };
  return { store, actions };
};

export default useStore;
