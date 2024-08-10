// src/hooks/useUserAuthentication.js
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { postRequest } from "./apiUtils";
import { loginUrl } from "../constants/Constants";

/**
 * Custom hook to handle user authentication.
 * 
 * @returns {Function} - Function to perform authentication.
 */
const useUserAuthentication = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const authenticateUser = async (data, e) => {
    e.preventDefault();
    try {
      const result = await postRequest(loginUrl, data);
      const token = result.message;

      localStorage.setItem("authToken", token);
      login(token);
      navigate("/");
      return true;
    } catch (error) {
      navigate("/login");
      return false;
    }
  };

  return authenticateUser;
};

export default useUserAuthentication;
