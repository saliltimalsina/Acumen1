import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const handleLink = (productid) => () => {
  window.location.href = `/product/${productid}`;
};

export default function Product({ product }) {
  return (
    <div
      onClick={handleLink(product._id)}
      className="product text-center col-lg-3 col-md-4 col-sm-12 mt-5"
    >
      <img className="img-fluid mb-3 myimg" src={product.image}></img>
      <div className="star">
        <Rating
          style={{ color: colors.orange }}
          initialRating={product.rating}
          emptySymbol="fa fa-star-o "
          fullSymbol="fa fa-star"
          readonly={true}
        />
      </div>
      <h5 className="p-name">{product.name}</h5>
      <h4 className="p-price">{"$" + product.price}</h4>

      <button className="buy-btn">Buy Now</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

{
  /* <div>
        <Link to={`/product/${product._id}`}>
         <div className="text-center"> <img src={product.image} className="img-fluid" /></div>
          <h1>{product.name}</h1>
        </Link>
        <Rating
          style={{ color: colors.orange }}
          initialRating={product.rating}
          emptySymbol="fa fa-star-o "
          fullSymbol="fa fa-star"
          readonly={true}
        />
        
        <h1>Price: {product.price}</h1>
      </div> */
}
