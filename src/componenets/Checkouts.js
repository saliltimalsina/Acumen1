import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../action/orderActions";
import Loader from "./Loader";
import Error from "../components/Error";
import Success from "./Succes";

function Checkouts(amount) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, success, error } = orderstate;
  const subtotal = amount.amount;
  function tokenHandler(token) {
    dispatch(placeOrder(token, subtotal));
  }

  function validate() {
    if (!localStorage.getItem("currentUserToken")) {
      window.location.href = "/login  ";
    }
  }

  return (
    <div>
      {loading && <Loader />}
      {success && <Success msg="Order placed successfully" />}
      {error && <Error error="Something went wrong" />}
      <StripeCheckout
        shippingAddress
        token={tokenHandler}
        currency="USD"
        amount={subtotal * 100}
        name="PAY NOW"
        stripeKey="pk_test_51KScxcSChiVbg4koqOKDaMUPAkTHaVOGYyXwmyiZZQvlO8Ywe8BY9H0FAaexG7xNWynnE8DNaqfaOwizCTnicSRG00Su1WVx6E"
      >
        <button className="btn" onClick={validate}>
          PAY NOW
        </button>
      </StripeCheckout>
    </div>
  );
}

export default Checkouts;
