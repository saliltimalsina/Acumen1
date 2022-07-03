import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../action/productActions";
import { getProductByIdReducer } from "../reducers/productReducer";
import { addtoCart } from "../action/cartActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Review from "../components/Review";
import bg1 from "../style/images/featured/bg1.jpg";

export default function Productdescscreen() {
  let { productid } = useParams();

  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );
  const { product, loading, error } = getproductbyidstate;
  // console.log(product[0].name)

  function addtocart() {
    dispatch(addtoCart(product, quantity));
  }

  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="Something went wrong"></Error>
      ) : (
        <div className="sproduct my-5 py-5 container">
          <div className="row mt-5">
            <div className="col-lg-5 col-md-12 col-md-12">
              <img className="img-fluid w-100 pb-1" src={product.image} />
              <div className="small-img-group">
                {/* <div className="small-img-col">
                  <img className="small-img w-100" src={bg1} />
                </div>

                <div className="small-img-col">
                  <img className="small-img w-100" src={bg1} />
                </div>

                <div className="small-img-col">
                  <img className="small-img w-100" src={bg1} />
                </div> */}

                {/* <div className="small-img-col">
                  <img className="small-img w-100" src={bg1} />
                </div> */}
              </div>
            </div>
            {/* <div className="card p-2 m-3">
              <h1>{product.name}</h1>

             
              <p>{product.description}</p>
            
          </div> */}
            <div className="col-lg-6 col-md-12 col-md-12">
              <h6>Home /{product.category}</h6>
              <h3 className="py-4">{product.name}</h3>

              <h2>{"$" + product.price}</h2>

              {/* <select className="my-3">
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>L</option>
              </select> */}

              <select
                className="cart-count"
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>

              <button className="buy-btn ml-3" onClick={addtocart}>
                Add to Cart
              </button>
              {/* <button className="btn btn-dark" onClick={addtocart}>
                Add to cart
              </button> */}

              <h4 className="mt-5 mb-4">Product Details</h4>

              <span>
                {product.description && product.description.substr(0, 240)}..
              </span>
            </div>
          </div>
          <hr></hr>
          <div className="row container">
            <Review product={product} />
          </div>
        </div>
      )}
    </div>
  );
}
