import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuthContext } from "../Hooks/useAuthContext";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AddTask from "./TaskPages/AddTask";
import { useState, useEffect } from "react";

const NavBar = () => {
  const { user, logout } = useAuthContext();
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
    window.location.reload();
  };
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

  async function handleSubmit(e) {
    e.preventDefault();
    logout();
  }
  return (
    <>
      <Navbar expand="lg">
        <Container className="d-flex" style={{ maxWidth: "100%" }}>
          <Navbar.Brand className="navbar-title">
            <img
              alt="not found"
              src={require("../Utils/Images/logo.png")}
              width="30"
              height="30"
              className="navbar-logo d-inline-block align-top"
            />{" "}
            TodoApp
          </Navbar.Brand>
          {user ? (
            <div className="d-flex">
              <div className="addtask d-flex justify-content-center my-2 mx-3">
                <AddTask />
              </div>
              <Navbar.Collapse className="d-flex justify-content-end me-5">
                <Nav align="end">
                  <NavDropdown
                    align="end"
                    title={
                      <FontAwesomeIcon className="bar-icon" icon={faBars} />
                    }
                  >
                    <NavDropdown.Item href="/">{user.name}</NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={toggleTheme}
                      className="btn btn-primary btn-large centerButton"
                      type="submit"
                    >
                      {isDarkTheme ? (
                        <span aria-label="Light mode" role="img">
                          Light mode
                        </span>
                      ) : (
                        <span aria-label="Dark mode" role="img">
                          Dark mode
                        </span>
                      )}
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={handleSubmit}
                      className="btn btn-primary btn-large centerButton"
                      type="submit"
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          ) : (
            ""
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
