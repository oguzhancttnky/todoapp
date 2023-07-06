import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Navigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export const AuthContext = createContext({});
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("access-token");
      if (token) {
        const {
          data: { _id, name, email },
        } = await axios.post("http://localhost:5000/api/user/getUser", {
          token,
        });
        setUser({ _id, name, email });
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email, password) => {
    try {
      const {
        data: { token },
      } = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });
      if (token) {
        const { data: user } = await axios.post(
          "http://localhost:5000/api/user/getUser",
          { token }
        );
        setUser(user);
        <Navigate to={"/home"} />;
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const register = async (name, email, password1, password2) => {
    try {
      const {
        data: { token },
      } = await axios.post("http://localhost:5000/api/user/register", {
        name,
        email,
        password1,
        password2,
      });
      if (token) {
        const { data: user } = await axios.post(
          "http://localhost:5000/api/user/getUser",
          { token }
        );
        setUser(user);
        <Navigate to={"/home"} />;
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const logout = async () => {
    await axios.get("http://localhost:5000/api/user/logout");
    setUser(null);
    <Navigate to={"/login"} />;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
