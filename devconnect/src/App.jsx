import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Feed from "./components/Feed";
import { use, useContext, useEffect } from "react";
import UserContext from "./context/UserContext";
import { feeds } from "./services/UiApi";

function App() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !localStorage.getItem("user")) {
      navigate("/login");
    }
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      navigate("/");
    }
  }, []);
  return (
    <>
      {user ? <Navbar /> : <></>}
      <Outlet />
    </>
  );
}

export default App;
