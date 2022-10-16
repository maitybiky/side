import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaCloudsmith } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { fetchProducts } from "../Store/Slice/Productslice";
import { useEffect } from "react";
import { searchi } from "../Store/Slice/Search";
const Nav = () => {

  
  const Dispatch = useDispatch();

  const search = (e) => {
    const Word = e.target.value;
    
    Dispatch(fetchProducts(Word));
 
  };
  const state = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                <FaCloudsmith /> Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
              <li className="nav-item active">
              <NavLink className="nav-link" to="/sign-up">
                Register <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => search(e)}
                />
              </form>
            </li>
          </ul>
        </div>
          <span  className="navbar-text">
            <NavLink className="nav-link" to="/cart">
               Cart  &nbsp;
              <div style={{ display: "inline", width: 5,height:7 }}>
                {state.length === 0 ? (
                  <span>
                    <AiOutlineShoppingCart />
                  </span>
                ) : (
                  <span className="badge badge-secondary">{state.length}</span>
                )}
              </div>
              {/* <span className="badge badge-secondary">{state.length}</span>{" "} */}
            </NavLink>
          </span>
        
        
      </nav>
      <div style={{ height: 50 }}></div>
    </>
  );
};

export default Nav;
