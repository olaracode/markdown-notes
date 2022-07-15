import { useContext } from "react";
import { AppContext } from "context";
const useAuth = () => {
  const { authContext, setAuthContext } = useContext(AppContext);
  return { authContext, setAuthContext };
};

export default useAuth;
