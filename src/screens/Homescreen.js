import React from "react";
import Product from "../components/Product";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../action/productActions";
import { getAllProductsReducer } from "../reducers/productReducer";
import Filter from "../components/Filter";
import {NewSection, Featured, Banner, BrandNew} from "./NewSection";
import Footer from "../components/Footer";
import bgimg3 from "../style/images/bgimg3.jpg"

function Homescreen() {
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
      <div id="home">
        <div className="container">
          
          <h1>
            <span>Best Books </span>
            AVAILABLE
          </h1>
          <p>
            Providing a source of information which, when consulted, may <br></br>
            enable pupils to make informed judgement
          </p>

          
        </div>

      
      </div>
      
      <Featured/>
      <Banner/>
      <BrandNew/>
      <NewSection/>

    </div>
  );
}

export default Homescreen;
