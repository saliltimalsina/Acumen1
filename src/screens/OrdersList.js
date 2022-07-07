import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../action/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getAllOrders } from "../action/orderActions";

export default function OrdersList() {
  const getallordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { orders, loading, error } = getallordersstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error msg="Something went wrong" />}
      <h2>Orders list</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order id</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Transaction ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr
                  onClick={() => {
                    window.location.href = `/orderinfo/${order._id}`;
                  }}
                >
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.transactionID}</td>
                  <td>
                    {order.isDelivered ? (
                      <b>isDelivered</b>
                    ) : (
                      <b>Not Delivered</b>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
