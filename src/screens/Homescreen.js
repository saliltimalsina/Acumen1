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
          {/* <h5>NEW EDITIONS AVAILABE</h5> */}
          <h1>
            <span>Best Books </span>
            AVAILABLE
          </h1>
          <p>
            Providing a source of information which, when consulted, may <br></br>
            enable pupils to make informed judgement
          </p>

          
        </div>

        {/* <Filter />
      <div className="row justify-content-center mt-5">
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
      </div> */}
      </div>
      {/* <div className="brand-section">
        <div id="brand" className="container">
          <div className="row m-0 py-5">
            <img
              className="img-fluid col-lg-2 mol-md-4 col-sm-6"
              src="data:image/png;base64,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"
            ></img>
            <img
              className="img-fluid col-lg-2 mol-md-4 col-sm-6"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAeFBMVEX///8AAACUlJTr6+vDw8Pl5eW8vLz39/dHR0eenp5/f39hYWFZWVm0tLTz8/Pc3NwyMjLS0tLU1NRAQECurq6Ojo6np6dKSkpycnLNzc2Xl5d6enqFhYVmZmZ8fHxRUVE7OzslJSUdHR0rKysTExMnJycYGBgLCwspypPUAAAKMklEQVR4nO1da2OiMBA0an1UxapVUbGiff3/f3h5EDbKgOmJaALz4dqTEMk0CZPN7qbVauA7XrpXsXn0Mz4NVuwq3h79jE+D9+tkDR79jDaIrrdDoXvDl/hC1rIhyx4NWX9AQ9Yf8CxkxSW1566ohKx5FIXjU37dgzAaltaiO6ISshLM0Ks37AW311wRqiSLY39RqxMdKsXw88eGqq/PktYja7PWQ7+cSqtEf9p7/S1gqv1S3ndtjHpfy6u2YszHeVzNy/yaKdW7K7PeqrHJIavUL5mk1Tq+dO4fIVmdMr9jkVY7LbPaByCAZJU5XKj3jkus9TGYQLZmsGy/Yw26iZSpB9a+T0TWERZdoKIQ2/Qe+mPgOt1CD7YWCdKONVeM1BT9Ld6ra9P98IVauwAFt9ZcjdJ75vRhdS26I7CBAEgtyCoEzU602IkqbNIdAdubfXXNYTmI9B7jZVuqHHkchrDBmQXPqzVXy/SedgH5jgK2OLQqdYVn+swD3aDQhk2+MDoFk1V7dIWl0yjarib0JiXdcKq4SfdDH7YczsgF5uKwmzG/vKUXV/dvRVXA0xE0PU1hUb5CAqWNsvduQYXAK8Q2LHuAZXuoaFjcS11FCBmART9QSWgr9k83KLxAsuBEgyb5L1gpKX5vdIMCfs+hktas+qgbFPC8PckWhOtu+Cqgkj/3fvqqsUYkAKsKstuPssVapkHHI92ggM3xGUsNfG/CDUY/dUOCN0RDxlIDPfpgffSCdXf/Kxdd2LUuLTWIUkiGsSoocQ/yaQDdOC5e+lBiwF1GMmUcqnj4qoG3Ls67BVpy4zUyXS/HZeLZAMk6t9SgLX+o3mlQY8HqPLA7tmmpgcZSuJQZpJe90w0JIFnm9I3WhWtUk9e6QQFv3xjyHF0GKr/V2qWXP6p6+MoBySJLDVQXqB7PdYMCdgpML6PVdsZUL+C5blDARkA9RUPrMzQo0EvTT92gsEN86K4F7e+oFhquvxU+e+XA7gzJHD4Al5aoFrJg+KobFC59iyWUpQYSieZvY01U7cNXDWwElDMP2riOUR20V+SvblCATrmxuHIEF+AwK+53PgG7f8xy+hyyJ9OqCYp7rwDd+w44phPakykkwWfdoIDtyy9Q3SM2jPsrf/bqAZ1MQzg80e006bkVpfN/wE6maOJHm/KGwHAwTOfvsHaHREEANLU5HXtiDYsoVAloTy6m0kNYkoXmJCLaiRDoEoCdTDNA8ai0ReS/bkhgxRUyVdVLNyhgJ9MLIP+1eukGBexkegFwX910g4JFvhpkT14WXvUV2L58BmRPpqs10Q0K2Mn0yigkBwAUJ+UvsJOpAeTKTKtK6LzsL64FUwC7nm/hcvbICw5IEINbyH5fH92QADqZpgBhqcZLoUa6QSEv50MuHfXUDQniAq6QPZmu1ko3KGAnUwWwSibdEFf9pM+AglxhoDS55tZMNyhgJ1MB4J9cX92QIJcs4J9Mkn+bvVgH5OX8BbE4ddYNCXLIAn2HPCxrqBsUcnKEAP9kulhD3ZAAcgVcGGivMa76EZ8H0Mn0M1uOBGwtdYPCDHatjN2vBm7vFsA+pplxSLoBR+zXA5CrzCRu7G+4k9u2dORp+At5QJuy+8c851Mg16Z13oHo81ITnLqF/Lx1Z85GZJ5wPBHpTSjIW2cWI/94GPRUExQ4ahlW9tq4vReiMG8dFSN5UWfdgEXW5YhrdINEEVeUTKTRDQL5hlIJveahcLka6wYYBGYgcYNsdIPA1eTAas1DidrqrBuuJgeWe4eNbpAoOuJCQRhMKVwOhmnWBNiSdQYRTUj/q7NuuO7NJvZxaP+nzrrByru7bYTL4bMJEDbHN444/vEmxeQVkZWAPG2AXT4POqDRnxSTV0RWBva6IV1xerNn9ocTGBTsq9ZxBf7EBNufwKBgrxvSjSB/cpf+tWPZz9W6Y/mzOEIukjHOQC2BE5UipDOWP0FjSGStCmyB9rpBvwr9SaYPR2GQf0aR/fFDqY3Cn1U3ElnjghWQ/fFDqVX/jk9fMZDI6uV8/qeWpy9Zf7IfQZElLuTMWtbHCARntfkBFMeqXG5x17LWDekGt0dup4gQtTaBXct6jUeR+f64nSKRpd93yPnBVorT6Pbo+A8ksvQGNOha1oqJogo8shOioZY2L9u1bHUDbdl6lHclR2QlyHYty2qNnC3eGP1wsjHDq/aya1nOP8ZE6JEBGsbdG9en0VKirX5Edt3EjIv1xuiHR+HNh1CYXPljTcaj8Na+cCZGPPKIQCbS7xvrPEua5FHGB7hbeFssff/caOiLNTnIsbzfpCEvwvD+sGX2xJgP8wwwt8zImYhFh0N7+kFnuumtotEPYum2gdOZrbJZR1w9KsX+IPsS4ag1+Wpmnrvg0a3+T+DjKu4MV63Jj+DK1Y5VlA7kbnDVmgxz5N8bj270f8Iip1/5cNWaPFu2K8fSI2tygwYNGjRo0KBBgwYNGjRo0KBBg0ehs+kWHgY629zqezbtzhKH28BFbyM6x2tylDZM5c1w0GctfLN+ayv3+OSO8jhp65QMwz9s/qF3X0N+2ztbZo8mEAHnfRWef5C+M4FxmIMz+63pjvyBsf1w+MHYSXSfkW7LgpM1FDvt74xFYls/Kb7W/EzZZyvSzkOv/LYJa3fG+/0b4/8InPgvo5V0NjpFq+1B+XgFhoukMzF0mqyF7jRt6f2RJesoG7fVDgo97eK4Y++coyQWLCFL/BppMtbql7l2bnj5FHkCheVf25ZdI6tNcYIrMTKzZF1uyOi2is9Tsj6IrFddw0D9YvjBHVlXbZMkY9o1skwqBrzpWbIWFzGUbbX1txIbNRZkDY30Y1P2zckar9iXYssxsiZmZHOPTypZsmaMjcw3WKD4/RYFU7J2uWQtzLiTmHX6vP8uk2gNx8hamt2mww6ArNb8l7G1QddITPFz+Ta1IOvMdY1/nSCLl5E0OUZWZEbrBixGZPEuF5uOQhtxaygvRRZkmUeN8golWbx83HKOrK3pLTXln0GypH4gXXpiQV+NRRuyzPcD12WKrNZe5HRwjKyNGTQ/5FP3SL+74jOy+AAiF9wVG76rWT7So3ifS9bYdArn78GELP5FY9fIMl/sLdF7PjQ/okcIsqZD2aW6ppcC+46Vfthqbyuh9zFZPePc1hX/0wR6XI7Z3jWyeiQRD0Jh95LPu+KnICtSfCxNJ7SdzuIwT5o7FT9zdFac0rwR59YFaU6VtTtZMLSCj5K5e3NUvvxH2eS5jIIQZHVk39ucOXdP0ywOC7n4e/kS/TGHLC41DqL39pfym4gsfrMzZEls1Do5Fp64Kme5UNjrk/Jm1GvD+O3CH3uhD5Lp/zA2+FaeRIlm29ErQv3SF/7iA3FIZFfWT/EVb7fGbVSF8JVjJ/7kwZYPiDhK564tpyaU/+uGYp28GfOl9rlhZUKz/ZDLipFcW29CSeh7mLw32/oXfoVTNVbjuB8aCYXRMdT+oXGz8gP/ADo6amGvxbZYAAAAAElFTkSuQmCC"
            ></img>
            <img
              className="img-fluid col-lg-2 mol-md-4 col-sm-6"
              src="https://i.pinimg.com/originals/f3/f4/6f/f3f46fb37352638f4684024f75ebcef0.jpg"
            ></img>
            <img
              className="img-fluid col-lg-2 mol-md-4 col-sm-6"
              src="https://1000logos.net/wp-content/uploads/2017/05/Logo-Prada.jpg"
            ></img>
            <img
              className="img-fluid col-lg-2 mol-md-4 col-sm-6"
              src="https://logos-world.net/wp-content/uploads/2021/08/Christian-Dior-Logo-2018-present.png"
            ></img>
            <img
              className="img-fluid col-lg-2 mol-md-4 col-sm-6"
              src="data:image/png;base64,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"
            ></img>
          </div>
        </div>
      </div> */}
      <Featured/>
      <Banner/>
      <BrandNew/>
      <NewSection/>

    </div>
  );
}

export default Homescreen;
