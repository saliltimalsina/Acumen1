import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../action/productActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Succes";
import { addProductReducer } from "../reducers/productReducer";

export default function AddProduct() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const dispatch = useDispatch();

  const addproductstate = useSelector((state) => state.addProductReducer);
  const { success, error, loading } = addproductstate;

  const addproduct = (e) => {
    e.preventDefault();

    const product = {
      name: name,
      price: price,
      countInStock: countInStock,
      imageurl: imageurl,
      category: category,
      description: description,
    };
    console.log(product);
    dispatch(addProduct(product));
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          {success && <Success msg="Product added successfully" />}
          <h2>Add product</h2>
          <form onSubmit={addproduct}>
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
              className="btn mt-5"
              type="submit"
              style={{ float: "left" }}
            >
              Add product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
