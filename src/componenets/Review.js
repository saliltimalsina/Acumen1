import React, { useState } from "react";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductReview } from "../action/productActions";
import bg1 from "../style/images/featured/bg1.jpg";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default function Review({ product }) {
  const [rating, setrating] = useState(5);
  const [comment, setcomment] = useState("");
  const dispatch = useDispatch();
  const { productid } = useParams("productid");
  console.log(product);

  function sendReview() {
    const currenctUserData = JSON.parse(
      localStorage.getItem("currentUserData")
    );

    var alreadyreviewed;
    for (var i = 0; i < product.reviews.length; i++) {
      if (product.reviews[i].userid == currenctUserData._id) {
        alreadyreviewed = true;
      }
    }
    if (alreadyreviewed) {
      console.log("i am in");
      alert("Already reviewed");
    } else {
      console.log("in here");
      const review = {
        rating: rating,
        comment: comment,
      };
      const productid = product._id;
      dispatch(addProductReview(review, productid));
      //   window.location.href = "/product/{`$productid}`";
    }
  }

  return (
    <div>
      <div id="reviews">
        <div className="reviews-heading">
          <span> Reviews</span>
          <h2>From Customers</h2>
        </div>

        <div className="reviews-box-container">
          {product.reviews &&
            product.reviews.map((review) => {
              return (
                <div className="reviews-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img src={bg1}></img>
                      </div>
                      <div className="name-user">
                        <strong>{review.name}</strong>
                        <span>user</span>
                      </div>
                    </div>
                    <div className="cus-reviews">
                      <Rating
                        className="myrating"
                        style={{ color: colors.orange }}
                        initialRating={review.rating}
                        emptySymbol="fa fa-star-o "
                        fullSymbol="fa fa-star"
                        readonly={true}
                      />
                    </div>
                  </div>

                  {/* comments */}
                  <div className="customer-comment">
                    <p>{review.comment}</p>
                  </div>
                </div>

                // <div className="review-box my-5 py-3">
                //   {review.name}

                //   <Rating
                //     className="myrating"
                //     style={{ color: colors.orange }}
                //     initialRating={review.rating}
                //     emptySymbol="fa fa-star-o "
                //     fullSymbol="fa fa-star"
                //     readonly={true}
                //   />

                //   {/* <div className="text-left">
                //     <Rating
                //       style={{ color: colors.orange }}
                //       initialRating={review.rating}
                //       emptySymbol="fa fa-star-o "
                //       fullSymbol="fa fa-star"
                //       readonly={true}
                //     />
                //     <p>{review.comment}</p>
                //     <p>By: {review.name}</p>

                //   </div> */}
                // </div>
              );
            })}
        </div>
      </div>
      <hr />
      <div className="mt-4">
        <h4 className="my-3">Submit your review</h4>
        <h2>
          <Rating
            style={{ color: colors.orange }}
            initialRating={0}
            emptySymbol="fa fa-star-o "
            fullSymbol="fa fa-star"
            readonly={false}
            onChange={(e) => {
              setrating(e);
            }}
          />
        </h2>
        <div>
          <input
            id="comment-input"
            type="text"
            className="form-control mt-2"
            value={comment}
            onChange={(e) => {
              setcomment(e.target.value);
            }}
          ></input>
          <button className="btn mt-3" onClick={sendReview}>
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}
