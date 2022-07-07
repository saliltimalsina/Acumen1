import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../action/orderActions";
import { getOrderByIdReducer } from "../reducers/ordersReducers";
import Error from "../components/Error";
import Loader from "../components/Loader";

export default function OrderInfoScreen() {
  const dispatch = useDispatch();
  const myorderstate = useSelector((state) => state.getOrderByIdReducer);
  const { order, loading, error } = myorderstate;
  console.log(order);

  let { orderid } = useParams();
  useEffect(() => {
    dispatch(getOrderById(orderid));
  }, [dispatch]);

  return (
    <div className="container my-5 pt-5">
      <h2 className="text-center py-3">All Orders</h2>
      {error && <Error error="Something went wrong" />}
      {loading && <Loader />}
      {order && (
        <div>
        <div className="row py-4 myorder ">
          <div className="col-md-5 text-left">
            <h4>Items in your order</h4>

            <hr />

            {order.orderItems.map((item) => {
              return (
                <div className="orderitem mb-4 ">
                  <h4>{item.name}</h4>
                  <h5>
                    Quantity:<b>{item.quantity}</b>
                  </h5>
                  <h5>
                    {item.quantity}*{item.price}={item.quantity * item.price}
                  </h5>
                </div>
              );
            })}
          </div>

          <div className="col-md-7 text-right myorder">
            <h4>Order Details</h4>
            <hr />
            <div className="text-right">
              <h5>Order Id: {order._id}</h5>
              <h5>Total amount: {order.orderAmount}</h5>
              <h5>Date of Order: Date</h5>
              <h5>Transaction ID: {order.transactionId}</h5>
              {order.isDelivered ? (
                <h5>Order delivered</h5>
              ) : (
                <h5>Order placed</h5>
              )}
              <hr />
              <div>
                <h5>Shipping Details</h5>
                <h5 className="text-right">
                  Address: <b>{order.shippingAddress.address}</b>
                </h5>
                <h5>
                  City: <b>{order.shippingAddress.city}</b>
                </h5>
                <h5>
                  PostalCode: <b>{order.shippingAddress.postalCode}</b>
                </h5>
              </div>
            </div>
          </div>
         <p></p>
         </div>
          <div className=" px-5 py-2 notice-box">
         
        <h2>Replacement conditions</h2>
        <p>
          The right to return any semi-durable or durable products purchased
          free of charge within 15 days of purchase if they are returned in
          their original condition, with no changes in shape or size, and in
          their original packaging. The elimination of slogans such as "no
          refund, no substitution" by vendors The assurances are included in the
          purchase price of the products, and the supplier is not allowed to
          charge the customer any additional fees for receiving the guarantees.
        </p>
      </div>
        </div>
      )}
      
    </div>
  );
}
