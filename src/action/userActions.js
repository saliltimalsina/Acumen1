import axios from "axios";

export const registerNewUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGITSER_REQUEST" });
  try {
    const result = await axios.post("/api/users/register", user);
    console.log(result);
    dispatch({ type: "USER_REGITSER_SUCCESS" });
    // window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_REGITSER_FAILED" });
    console.log(error);
  }

  // .then((res) => {
  //   dispatch({ type: "USER_REGISTER_SUCCESS" });

  //   console.log(res);
  // })
  // .catch((err) => {
  //   dispatch({ type: "USER_REGISTER_FAILED" });
  //   console.log(err);
  // });
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const result = await axios.post("/api/users/login", user);
    console.log(result);
    dispatch({ type: "USER_LOGIN_SUCCESS" });
    localStorage.setItem("currentUserToken", JSON.stringify(result.data.token));
    localStorage.setItem(
      "currentUserData",
      JSON.stringify(result.data.userData)
    );
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED" });
    console.log(error);
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUserToken");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("currentUserData");

  dispatch({ type: "USER_LOGOUT" });

  window.location.href = "/login";
};

export const updateUser = (userid, updateduser) => async (dispatch) => {
  dispatch({ type: "USER_UPDATE_REQUEST" });
  try {
    const result = await axios.post("/api/users/update", {
      updateduser,
      userid,
    });
    console.log(result);
    dispatch({ type: "USER_UPDATE_SUCCESS" });
    window.location.reload();
    // window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_UPDATE_FAILED" });
    console.log(error);
  }
};

export const getAllUsers = () => (dispatch) => {
  dispatch({ type: "GET_ALLUSERS_REQUEST" });
  axios
    .get("/api/users/getallusers")
    .then((res) => {
      dispatch({ type: "GET_ALLUSERS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_ALLUSERS_FAILED", payload: err });
    });
};

export const deleteUser = (userid) => (dispatch) => {
  dispatch({ type: "DELETE_USER_REQUEST" });
  axios
    .post("/api/users/deleteuser", { userid })
    .then((res) => {
      dispatch({ type: "DELETE_USER_SUCCESS", payload: res.data });
      alert("user deleted successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "DELETE_USER_FAILED", payload: err });
    });
};
