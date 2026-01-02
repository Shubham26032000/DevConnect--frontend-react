import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("NAV", user);
  }, []);
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            DevConnect
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to="create-post"
              >
                Create Post
              </Link>
            </div>
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to={`user/${user.id}`}
              >
                User
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <span className=" navbar-nav me-4 text-cent nav-link">
            {user.username}
          </span>
          <span className="me-4 nav-link nav-item" onClick={logout}>
            Logout
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
