import React from "react";
import { useParams } from "react-router-dom";
import {
  getProductByIdReducer,
  updateProductReducer,
} from "../reducers/productReducer";

import { getProductById, updateProduct } from "../action/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function EditProductScreen() {
  const { productid } = useParams("productid");
  const productstate = useSelector((state) => state.getProductByIdReducer);
  const { product, loading, error } = productstate;

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (product) {
      if ((product._id = productid)) {
        console.log(product);
        setname(product.name);
        setprice(product.price);
        setCountInStock(product.countInStock);
        setimageurl(product.image);
        setcategory(product.category);
        setdescription(product.description);
      } else {
        dispatch(getProductById(productid));
      }
    } else {
      dispatch(getProductById(productid));
    }
  }, [dispatch, product]);

  function editproduct(e) {
    e.preventDefault();
    const updatedProduct = {
      name: name,
      price: price,
      description: description,
      countInStock: countInStock,
      category: category,
      image: imageurl,
    };

    dispatch(updateProduct(productid, updatedProduct));
  }
  return (
    <div className="my-5 container">
      <h3>Edit Product Details</h3>
      {loading && <Loader />}
      {error && <Error msg="Something went wrong" />}
      {product && (
        <div>
          
          <form onSubmit={editproduct}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="product name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="number"
              className="form-control mb-2 mr-sm-2"
              placeholder="price"
              required
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="description"
              required
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="imageurl"
              required
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />

            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="category"
              required
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
            <input
              type="Number"
              className="form-control mb-2 mr-sm-2"
              placeholder="count in stock"
              required
              value={countInStock}
              onChange={(e) => {
                setCountInStock(e.target.value);
              }}
            />
            <button
              className="btn my-5"
              type="submit"
              style={{ float: "left" }}
            >
              Update Details
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
