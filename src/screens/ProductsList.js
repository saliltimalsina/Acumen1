import React from "react";
import Rating from "react-rating";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import {
  getAllProducts,
  deleteProduct,
  getProductById,
} from "../action/productActions";
import { Link } from "react-router-dom";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default function ProductsList() {
  const dispatch = useDispatch();
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { products, loading, error } = getallproductsstate;
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="mycontainer container mb-5 mt-5">
      <div className="row">
        {loading && <Loader />}
        {error && <Error error={"Something went wrong"} />}{" "}
        {products &&
          products.map((product) => {
            return (
              <div key={product._id} className="col-md-4">
                <div className="mycard card mt-4">
                  <div className="align items-center p-2 text-center">
                    <img
                      src={product.image}
                      className="rounded"
                      width="160"
                    ></img>
                    <h6 className="mt-2 px-5">
                      {product.name}
                      <Link to={`/admin/editproduct/${product._id}`}>
                        <i
                          className="fas fa-edit ml-2"
                          onClick={() => {
                            dispatch(getProductById(product._id));
                          }}
                        ></i>
                      </Link>
                    </h6>
                    {/* ---- */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">
                        In Stock: {product.countInStock}
                      </span>
                    </div>
                    <div className="const mt-1 text-dark">
                      <span>{"$" + product.price}</span>
                      <div className="star mt-1 align-items-center">
                        <Rating
                          style={{ color: colors.orange }}
                          initialRating={product.rating}
                          emptySymbol="fa fa-star-o "
                          fullSymbol="fa fa-star"
                          readonly={true}
                        />
                      </div>
                    </div>
                  </div>

                  {/* button */}

                  <div
                    onClick={() => {
                      dispatch(deleteProduct(product._id));
                    }}
                    className="p-3 adminProduct text-center text-white mt-3 mycursor cursor"
                  >
                    <span className="text-uppercase">Delete</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

// <div>
//       <h2>Products List</h2>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Stock</th>
//             <th>Id</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {loading && <Loader />}
//           {error && <Error error={"Something went wrong"} />}
//           {products &&
//             products.map((product) => {
//               return (
//                 <tr>
//                   <td>{product.name}</td>
//                   <td>{product.price}</td>
//                   <td>{product.countInStock}</td>
//                   <td>{product._id}</td>
//                   <td>
//                     <i
//                       onClick={() => {
//                         dispatch(deleteProduct(product._id));
//                       }}
//                       style={{marginRight:"10px"}}
//                       className="far fa-trash-alt"
//                     ></i>

//                     <Link to={`/admin/editproduct/${product._id}`}>

//                       <i className="fas fa-edit ml-2"
//                       onClick={() => {
//                         dispatch(getProductById(product._id));
//                       }}></i>
//                     </Link>
//                   </td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     </div>
