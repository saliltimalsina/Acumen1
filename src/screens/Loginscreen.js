import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../action/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { loginReducer } from "../reducers/userReducers";
import loginbg from "../style/images/loginbg.jpg";

function Loginscreen() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const loginreducer = useSelector((state) => state.loginReducer);
  const { loading, error } = loginreducer;

  function login(e) {
    e.preventDefault();
    const user = { username, password };
    dispatch(loginUser(user));
  }

  useEffect(() => {
    if (localStorage.getItem("currentUserToken")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="Form my-5 pt-5 mx-5">
      <div className="container">
        <div className="row  loginrow no-gutters">
          <div className="col-lg-5">
            <img src={loginbg} className="img-fluid login-img" />
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="py-3">Log In</h1>
            <h4>Sign in to your account</h4>
            <form onSubmit={login}>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control my-3 p-4"
                    required
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="password"
                    placeholder="****"
                    className="form-control my-3 p-4"
                    required
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              {error && (
                <div className="form-row">
                  <div className="col-lg-7">
                    <Error error="Invalid Credentials"></Error>
                  </div>
                </div>
              )}

              {loading && <Loader></Loader>}

              <div className="form-row">
                <div className="col-lg-7">
                  <button type="submit" className="btn1 mt-3 mb-5">
                    Login
                  </button>
                </div>
              </div>
              <a href="#">Forgot password</a>
              <p>
                Don't have an account? <a href="/register">Register here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;

{
  /* <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="form bs">
            <h2>Login</h2>
            {error && (<Error error="Invalid Credentials"></Error>)}

            {loading && (<Loader></Loader>)}

            <form onSubmit={login}>
              <input
                type="text"
                className="form-control"
                placeholder="username"
                required
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
              <input
                type="password"
                className="form-control"
                placeholder="password"
                required
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />

              <button type="submit" className="btn btn-primary mt-3">
                Login
              </button>
              <p>
                Already have an account?
                <a href="/register">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div> */
}
