import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { cartReducer } from "../reducers/cartReducer";
import { addtoCart, deleteFromCart } from "../action/cartActions";
import Checkouts from "../components/Checkouts";

export default function () {
  const cardreducerstate = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const { cartItems } = cardreducerstate;

  var totalprice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-5 py-4 container-fluid">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-8 my-cart">
          <h2 className="text-center m-5">My Cart</h2>
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) => {
                          dispatch(addtoCart(item, e.target.value));
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <i
                        className="far fa-trash-alt"
                        onClick={() => {
                          dispatch(deleteFromCart(item));
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <h2 className="text-center">Subtotal: {"$"+ totalprice}</h2>
        
          <Checkouts amount={totalprice} />
        </div>
      </div>
    </div>
  );
}
