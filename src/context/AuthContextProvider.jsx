import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate()
  const loginFunc = ({ username, password }) => {
    axios
      .post("https://discovered-snapdragon-zinnia.glitch.me/login", {
        username,
        password,
      })
      .then((res) => {
        setToken(res.data.token);
        setLogin(true);
        localStorage.setItem("token", res.data.token)
      })
      .catch((res) => {
        console.log(res)
        alert(res.message)
      })
      .finally(() => {
        navigate('/')
      })
  };

  const logoutFunc = () => {
    localStorage.removeItem('token');
    setLogin(false)
    navigate('/login')
  }
//   const tempToken = localStorage.getItem('token')
//   if(tempToken){
//     setLogin(true)
//   }
  return (
    <AuthContext.Provider value={{ login, loginFunc, token, logoutFunc }}>
      {children}
    </AuthContext.Provider>
  );
}
