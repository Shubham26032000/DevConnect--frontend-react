import { use, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { createUser } from "../services/UserApi";

function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefaults();
    createUser({ username, email, password })
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      })
      .catch((err) => {
        alert("something went wrong...!", err.getMessage());
      });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <form className="card shadow p-4" onSubmit={signUp}>
            <h2 className="text-center mb-3">Sign Up</h2>
            <div className="mb-3">
              <label htmlFor="usernameInput" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="usernameInput"
                placeholder="user123"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                id="passwordInput"
                type="password"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center mt-3 mb-3">
              <span>Already have an account ? </span>
              <Link to="/login" className="fw-bold text-decoration-none">
                Log In
              </Link>
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Sign Up"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
