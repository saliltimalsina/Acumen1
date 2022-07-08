import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../action/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { deleteUser } from "../action/userActions";

export default function Userslist() {
  const getallusersstate = useSelector((state) => state.getAllUserReducer);
  const { users, loading, error } = getallusersstate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h2>All users</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isAdmin ? <span>Admin</span> : <span>User</span>}
                  </td>
                  <td className="del-td">
                    <i
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                      className="far fa-trash-alt my-del-btn"
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
