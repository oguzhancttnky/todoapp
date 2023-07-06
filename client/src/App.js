import "./App.css";
import Login from "./AuthPages/Login";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Register from "./AuthPages/Register";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import { useAuthContext } from "./Hooks/useAuthContext";
import SpinnerExample from "./Utils/SpinnerExample";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Utils/Theme";

function App() {
  const { user, loading } = useAuthContext();
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);
  return (
    <div>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />

        <NavBar />
        {loading ? (
          <SpinnerExample />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to={"/home"} />} />
              <Route
                path="/home"
                element={user ? <Home /> : <Navigate to={"/login"} />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to={"/home"} />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to={"/home"} />}
              />
            </Routes>
          </BrowserRouter>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
