import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { getProfilePic } from "../services/UserApi";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log("NAV", user);
    getProfilePic(user.userId)
      .then((response) => {
        setProfileImage(URL.createObjectURL(response.data));
        console.log("Profile image", profileImage);
      })
      .catch((error) => console.log(error));
  }, []);
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    localStorage.removeItem("token");
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
                to={`user/${user.userId}`}
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
          <img
            className="img-fluid rounded-circle"
            src={profileImage}
            alt="User"
            width={"50px"}
            height={"50px"}
          />
          <span className="me-4 nav-link nav-item" onClick={logout}>
            Logout
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
