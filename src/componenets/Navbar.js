import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { logoutUser } from "../action/userActions";
import logo from "../style/mylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import {BiUser} from "react-icons/bi"

export default function Navbar() {
  const dispatch = useDispatch();
  const cartreducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducer;
  const currentUserToken = JSON.parse(localStorage.getItem("currentUserToken"));
  const currentUserData = JSON.parse(localStorage.getItem("currentUserData"));

  const handleClick = (mylink) => () => {
    window.location.href = mylink;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg mynav py-4 fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Acumen
            {/* <img src={logo} className="mylogo" alt="" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="ti-align-justify navbar-toggle-icon"></span> */}
            <span>
              <VscThreeBars id="bar" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  Blog
                </a> */}
              </li>
              
              {currentUserToken ? (
                <>
              <li className="nav-item ml-2">
              <BiUser/>
              </li>
                <DropdownButton
                  id="dropdown-basic-button"
                  className="mx-1 mr-2"
                  title={currentUserData.username}
                >
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                  {currentUserData.isAdmin && (<Dropdown.Item href="/admin">Admin</Dropdown.Item>)}
                  <Dropdown.Item
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </DropdownButton>
                </>
               
              ) : (
                <li className="nav-item active">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
              <li className="nav-item"></li>
              <li className="nav-item">
                <i onClick={handleClick("/cart")}>
                  <FaShoppingCart />
                  <span id="cartNumber">{cartItems.length}</span>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-lg mynav fixed-top">
        <a className="navbar-brand" href="/">
          TrendyFits
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto">
            {currentUserToken ? (
              <DropdownButton
                id="dropdown-basic-button"
                title={currentUserData.username}
              >
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Logout
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <li className="nav-item active">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fas fa-shopping-cart"></i>
                {cartItems.length}
              </a>
            </li>
          </div>
        </div>
      </nav> */}
    </div>
  );
}
