import React from "react";
import { TbCurrencyRupee } from "react-icons/tb";

import GradeIcon from "@mui/icons-material/Grade";
import { useState, useEffect } from "react";
import { addTocart, removeFromcart } from "../Store/Slice/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/Slice/Productslice";
import { useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";
import Login from "./Login";
const Products = () => {
  const Navigate = useNavigate();

  // const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState("Loading...");
  const {search, cart, product, auth } = useSelector((state) => {
    console.log(state.product);
    return state;
  });
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetchProducts());
  }, []);

  const add = (id) => {
    Dispatch(addTocart(id));
  };

  const deleteItem = (id) => {
    Dispatch(removeFromcart(id));
  };

  const navigate = (id) => {
    Navigate("/products/" + id);
  };
  return (
    <div>
       {/* <h5 className="txtcenter fnt yellow">
        &nbsp;{product.status}
        {product.status === "Not Found !" ? <BiError /> : ""}
      </h5> */}
      {
        auth?.state ? (
      <h5 className="txtcenter fnt yellow">
        &nbsp;{product.status}
        {product.status === "Not Found !" ? <BiError /> : ""}
      </h5>

        ):
        (
<Login/>
        )
      }
      <div className="container grid">
        {auth?.state && (
          <>

          {/* .filter(item=>JSON.stringify(item).toLowerCase().includes(search.wordi.toLowerCase())) */}
            {product.data.map((item) => {
              return (
                <div>
                  <div
                    className="card cbody "
                    style={{ width: "10rem", height: "23rem" }}
                  >
                    <img
                      onClick={() => navigate(item.id)}
                      src={item.image}
                      className="card-img-top img"
                      alt="..."
                    />

                    <div className="card-body inside">
                      <div className="sbar">
                        <p className="txtcenter">{item.title}</p>
                      </div>
                      <div>
                        <span className="center">
                          <TbCurrencyRupee />
                          {item.price.toFixed(0)}
                        </span>

                        <span className="center">
                          {[...Array(Math.floor(item.rating.rate))].map(() => (
                            <GradeIcon color="primary" fontSize="small" />
                          ))}
                          {item.rating.rate}
                        </span>

                        <div className="center">
                          {cart.some((data) => data.id === item.id) ? (
                            <button
                              onClick={() => deleteItem(item.id)}
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              Remove
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                add(item);
                              }}
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
         )} 
      </div>
    </div>
  );
};

export default Products;
