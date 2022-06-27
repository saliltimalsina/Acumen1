import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../action/userActions";
import Loader from "../components/Loader";
import Success from "../components/Succes";
import Error from "../components/Error";
import registerbg from "../style/images/registerbg.jpg";

function Registerscreen() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const registerState = useSelector((state) => state.registerNewUserReducer);
  const { loading, error, success } = registerState;
  // const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  function register(e) {
    e.preventDefault();
    if (password == cpassword) {
      const user = {
        username: username,
        email: email,
        password: password,
      };
      console.log(user);
      dispatch(registerNewUser(user));

      // try {
      //   const result = await axios.post("/api/users/register", user);

      //   if (result.data.success) {
      //     setMessage("Registered sucess!!!");
      //   } else {
      //     setMessage("User already exists!!");
      //   }
      // } catch (error) {
      //   console.log(error);
      // }

      // console.log(user);
    } else {
      alert("password dont match");
    }
  }

  return (
    <div className="Form my-5 pt-5 mx-5">
      <div className="container">
        <div className="row  loginrow no-gutters">
          <div className="col-lg-5">
            <img src={registerbg} className="img-fluid login-img" />
          </div>
          <div className="col-lg-7 px-5 pt-3">
            <h1 className="py-2">Register Here </h1>

            <form onSubmit={register}>
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
                    type="email"
                    required
                    className="form-control my-3 p-4"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="password"
                    required
                    className="form-control my-3 p-4"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="password"
                    required
                    className="form-control my-3 p-4"
                    placeholder="confirm password "
                    value={cpassword}
                    onChange={(e) => {
                      setcpassword(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              {error && (
                <div className="form-row">
                  <div className="col-lg-7">
                    <Error error="Username already exists"></Error>
                  </div>
                </div>
              )}

              {success && (
                <div className="form-row">
                  <div className="col-lg-7">
                    <Success msg="User registered successfully" />
                  </div>
                </div>
              )}

              {loading && <Loader></Loader>}

              <div className="form-row">
                <div className="col-lg-7">
                  <button type="submit" className="btn1 mt-3 mb-5">
                    Register
                  </button>
                </div>
              </div>

              <p>
                Already have an acocunt? <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="row justify-content-center mt-5">
    //     <div className="col-md-5">
    //       <div className="form bs">
    //         <h2>Register</h2>
    //         {loading && <Loader/>}

    //         {error && <Error error="username is taken"/>}

    //         {success && <Success msg="User registered successfully" />}
    //         <form onSubmit={register}>
    //           <input
    //             type="text"
    //             required
    //             className="form-control"
    //             placeholder="name"
    //             value={username}
    //             onChange={(e) => {
    //               setusername(e.target.value);
    //             }}
    //           />
    //           <input
    //             type="email"
    //             required
    //             className="form-control"
    //             placeholder="email"
    //             value={email}
    //             onChange={(e) => {
    //               setemail(e.target.value);
    //             }}
    //           />
    //           <input
    //             type="password"
    //             required
    //             className="form-control"
    //             placeholder="password"
    //             value={password}
    //             onChange={(e) => {
    //               setpassword(e.target.value);
    //             }}
    //           />
    //           <input
    //             type="password"
    //             required
    //             className="form-control"
    //             placeholder="confirm password"
    //             value={cpassword}
    //             onChange={(e) => {
    //               setcpassword(e.target.value);
    //             }}
    //           />

    //           <button type="submit" className="btn btn-primary mt-3">
    //             Register
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Registerscreen;
