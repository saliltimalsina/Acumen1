import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../action/productActions";

export default function () {
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");

  const dispatch = useDispatch();

  return (
    <div className="mt-5 pt-5">
      <div className="row">
        <div className="col-md-4">
          <input
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type="text"
            placeholder="search products"
            className="form-control mt-1"
          />
        </div>
        <div className="col-md-3 my-1">
          <select
            className="form-control"
            value={sort}
            onChange={(e) => {
              setsort(e.target.value);
            }}
          >
            <option value="popular">Popular</option>
            <option value="htl">high to low</option>
            <option value="lth">low to high</option>
          </select>
        </div>
        <div className="col-md-3 my-1">
          <select
            className="form-control"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Bagpack">Bagpack</option>
            <option value="Unisex">Unisex</option>
            <option value="fashion">Fashion</option>
          </select>
        </div>
        <div className="col-md-2 my-1 ">
          <button
            className="btn"
            onClick={() => dispatch(filterProducts(searchkey, sort, category))}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
