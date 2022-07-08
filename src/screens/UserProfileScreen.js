import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Success from "../components/Succes";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { updateUser } from "../action/userActions";

export default function UserProfileScreen() {
  const loginstate = useSelector((state) => state.loginReducer);
  const updateuserstate = useSelector((state) => state.updateUserReducer);
  const currentUser = loginstate.currentUserData;
  const { loading, success, error } = updateuserstate;
  const dispatch = useDispatch();

  const [username, setusername] = useState(currentUser.username);
  const [email, setemail] = useState(currentUser.email);
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  function update(e) {
    e.preventDefault();
    if (password == cpassword) {
      const updateduser = {
        username: username,
        email: email,
        password: password,
      };
      dispatch(updateUser(currentUser._id, updateduser));
    } else {
      alert("Password don't match.");
    }
  }

  return (
    <div className="container mt-5 py-5">
      <div className="up-dt row justify-content-center mt-5 py-5">
        <div className="col-md-8">
          <div className="form bs">
            <h2 className="text-center m-5">Update Details Here</h2>
            {loading && <Loader />}

            {error && <Error error="Something went wrong" />}

            {success && <Success msg="User updated successfully" />}
            <form onSubmit={update}>
              <input
                type="text"
                required
                className="form-control py-4 my-2"
                placeholder="name"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
              <input
                type="email"
                required
                className="form-control  py-4 my-2"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                type="password"
                required
                className="form-control  py-4 my-2"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <input
                type="password"
                required
                className="form-control  py-4 my-2"
                placeholder="confirm password"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />

              <button type="submit" className="btn btn-primary mt-3 px-5  ">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
