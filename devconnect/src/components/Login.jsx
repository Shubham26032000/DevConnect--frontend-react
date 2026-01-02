import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { login } from "../services/UserApi";
function Login() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    login({ email, password })
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => alert("Invalid password or username"));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <form className="card shadow p-4" onSubmit={loginUser}>
              <h2 className="text-center mb-3">Login</h2>

              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="text-center mt-3 mb-3">
                <span>New User? </span>
                <Link to="/signup" className="fw-bold text-decoration-none">
                  Sign Up
                </Link>
              </div>
              <input
                className="btn btn-primary"
                type="submit"
                value="Login"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
