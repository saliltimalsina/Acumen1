import React from "react";
import bg1 from "../style/images/featured/bg1.jpg";
import Rating from "react-rating";

import got from "../style/images/got.jpg"
import harry from "../style/images/harry.jpg"
import berserk from "../style/images/berserk.jpg"

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const handleClick = (mylink) => () => {
  window.location.href = mylink;
};

export const NewSection = () => {
  
  return (

    
    <div id="new" className="w-100">
      <div className="row p-0 m-0">
        <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
          <img
            className="img-fluid"
            src="https://media.thuprai.com/products/subtle_fuck.jpg"
          ></img>

          <div className="details">
            <h2>Our Best Selling</h2>
            <button className="tex-uppercase">Shop now</button>
          </div>
        </div>
        <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
          <img
            className="img-fluid"
            src={berserk}
          ></img>

          <div className="details">
            <h2>Dark Fantasy</h2>
            <button className="tex-uppercase">Shop now</button>
          </div>
        </div>
        <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
          <img
            className="img-fluid"
            src="https://images-na.ssl-images-amazon.com/images/I/91OINeHnJGL.jpg"
            // src="https://static.wikia.nocookie.net/jjba/images/a/aa/Volume_97.jpg/revision/latest?cb=20120215021306"
          ></img>

          <div className="details">
            <h2>Restocked</h2>
            <button className="tex-uppercase">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Featured = () => {
  return (
    <div>
      <div id="featured" className="my-5 pb-5">
        <div className="container text-center mt-5 py-5">
          <h3>Our Featured Books</h3>
          <hr className="mx-auto  org-hr" />
          <p>
           Here you can check our featured books with affordable price in Acumen.
          </p>
        </div>

        <div className="row mx-auto container-fluid">
          <div
            onClick={handleClick('/sproduct')}
            className="product text-center col-lg-3 col-md-4 col-sm-12"
          >
            <img className="img-fluid mb-3" src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421590653/jojos-bizarre-adventure-part-3-stardust-crusaders-vol-1-9781421590653_hr.jpg"></img>
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Jojo No Kimi Yo Na Bouken</h5>
            <h4 className="p-price">$420</h4>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            <img className="img-fluid mb-3" src="https://cdn.shopify.com/s/files/1/0523/4733/8902/products/VinlandSagaVolume12.jpg?v=1645801265"></img>
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Vinland Saga</h5>
            <h4 className="p-price">$369</h4>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            <img className="img-fluid mb-3" src="https://images-na.ssl-images-amazon.com/images/I/81X3GfWMJPL.jpg"></img>
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Diamond is Unbreakable</h5>
            <h4 className="p-price">$69</h4>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            <img className="img-fluid mb-3" src="http://prodimage.images-bn.com/pimages/9781421592640_p0_v1_s1200x630.jpg"></img>
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Hunter x Hunter</h5>
            <h4 className="p-price">$690</h4>

            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Banner = () => {
  return (
    <div id="banner" className="my-5 py-5">
      <div className="container">
        <h4>MID SEASON'S SALE</h4>
        <h1>
         KID's Collection<br /> KID'S BOOKS ARE UP TO 25% OFF
        </h1>
        <button className="text-uppercase">Shop Now</button>
      </div>
    </div>
  );
};

export const BrandNew = () => {
  return (
    <div>
      <div id="featured my-5 py-4">
        <div className="container text-center mt-5 py-5">
          <h3>Brand New</h3>
          <hr className="mx-auto org-hr" />
          <p>
          Books that just landed fresh on the market. Check it out.
          </p>
        </div>

        <div className="row mx-auto container-fluid">
          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            <img className="img-fluid mb-3" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnHhoCpOMeEq4EwrxKuTJRcdGO1y8olvcy8_IrgPCxMKGFOBoa"></img>
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">The TurnOut</h5>
            <h4 className="p-price">$420</h4>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            <img className="img-fluid mb-3" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTReNaXt9tGyesp6kJfIhvYxxA2f6jws1XEWXwL1FP_1qMjLEbg"></img>
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">The Books from Empitiness</h5>
            <h4 className="p-price">$400</h4>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            <img className="img-fluid mb-3" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3425p6kaGSv0HgAtvy7n_MqrR6NZ7RdNEyKV6DlNzg2dsLvp2"></img>
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Hell of a Book</h5>
            <h4 className="p-price">$400</h4>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            <img className="img-fluid mb-3" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShU0uc86d0KN9cHUYzerq80t0FhNlSJ8NkjQn8dsk3a6l24B3i"></img>
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Malibu Rising</h5>
            <h4 className="p-price">$400</h4>

            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
