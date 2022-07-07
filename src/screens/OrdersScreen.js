import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersUserById } from "../action/orderActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";
export default function OrdersScreen() {
  const orderstate = useSelector((state) => state.getOrderReducer);
  const { orders, error, loading } = orderstate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUserToken")) {
      dispatch(getOrdersUserById());
    } else {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h2>My Orders</h2>
          <table className="table table-striped"> 
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Transaction ID</th>
                <th> Status</th>
              </tr>
            </thead>
            <tbody>{loading && <Loader />}</tbody>
            {orders &&
              orders.map((order) => {
                return (
                  <tr onClick={()=>{
                    (window.location = `/orderInfo/${order._id}`)
                  }}>
                    <td>{order._id}</td>
                    <td>{order.orderAmount}</td>
                    <td>date</td>
                    <td>{order.transactionID}</td>
                    <td>
                      {order.isDelivered ? (
                        <h4>Delivered</h4>
                      ) : (
                        <h4>Order placed</h4>
                      )}
                    </td>
                  </tr>
                );
              })}

            {error && <Error error="Something went wrong" />}
          </table>
        </div>
      </div>
    </div>
  );
}
