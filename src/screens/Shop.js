import React from "react";
import Product from "../components/Product";
import bg1 from "../style/images/featured/bg1.jpg";
import Rating from "react-rating";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../action/productActions";
import Filter from "../components/Filter";

import Loader from "../components/Loader";
import Error from "../components/Error";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default function Shop() {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getallproductsstate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <div className="container ">
      <Filter />
        <div className="row justify-content-center mt-2 pt-2">
          {loading ? (
            <Loader></Loader>
          ) : error ? (
            <Error error="Something went wrong" />
          ) : (
            // <h1>Error</h1>

            products.map((product) => {
              return <Product key={product._id} product={product}></Product>;
            })
          )}
        </div>

      </div>
     
    </div>
  );
}

