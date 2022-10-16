import React from "react";
import { useState, useEffect } from "react";
import { TbCurrencyRupee } from "react-icons/tb";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { removeFromcart } from "../Store/Slice/Cartslice";
import { increaseQty, decreaseQty } from "../Store/Slice/Cartslice";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";

const initialState = {
  firstName: "",
  password: "",
};
const Cart = () => {
  const [total, settotal] = useState(0);
  const [hide, setHide] = useState(null);
  const cartitem = useSelector((state) => {
    console.log(state.cart);
    return state.cart;
  });
  useEffect(() => {
    settotal(
      cartitem.reduce((int, neW) => int + Number(neW.price * neW.quantity), 0)
    );
  }, [cartitem]);

  const Dispatch = useDispatch();

  const deleteItem = (id) => {
    Dispatch(removeFromcart(id));
  };
  const incqty = (id) => {
    Dispatch(increaseQty(id));
  };
  const decqty = (id) => {
    Dispatch(decreaseQty(id));
  };
  //form

  const Navigate = useNavigate();
  const [formValue, setFormValue] = React.useState(initialState);

  const { firstName, password} = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && password) {
      // dispatch(register({ formValue, navigate, toast }));
      // window.location.reload(false)
      setHide(true);
      alert(`${formValue.firstName} your order has been placed !`);
      Navigate("/invoice");
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <>
      <div className="spaceY"></div>
      <h1 className="txtcenter fnt"> Cart</h1>
      <h4 style={{ textAlign: "center", color: "green" }}>
        <Button size="small" variant="contained">
          <span style={{ fontWeight: 600 }}>
            {" "}
            Total Prize : Rs <TbCurrencyRupee />
            {total.toFixed(0)}
          </span>
          /-
        </Button>
      </h4>

      <div className="container-fluid bg">
        <table className="table  table-borderless">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantity</th>
              <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;Delete</th>
            </tr>
          </thead>

          {cartitem.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <img
                      style={{ height: 50, width: "auto" }}
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td>
                    {" "}
                    <h6>{item.title.substring(0, 13) + "..."}</h6>
                  </td>
                  <td>
                    <h6>
                      <TbCurrencyRupee />
                      {item.price.toFixed(0)}
                    </h6>
                  </td>
                  <td>
                    <Box>
                      <ButtonGroup
                        variant="text"
                        size="small"
                        aria-label="small text button group"
                      >
                        {item.quantity === 1 ? (
                          <Button disabled>
                            <FiMinus />
                          </Button>
                        ) : (
                          <Button onClick={() => decqty(item.id)}>
                            <FiMinus />
                          </Button>
                        )}
                        <Button>{item.quantity}</Button>
                        <Button onClick={() => incqty(item.id)}>
                          <FiPlus />
                        </Button>
                      </ButtonGroup>
                    </Box>
                  </td>

                  <td>
                    <div className="col-sm">
                      <button
                        onClick={() => deleteItem(item.id)}
                        type="button"
                        className="btn btn-danger btn-sm "
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className="payment-btn">
        {cartitem.length !== 0 ? (
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            className="btn btn-primary btn-lg "
          >
            Place Order
          </button>
        ) : null}
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden={hide}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Enter Your Information
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div
                style={{
                  margin: "auto",
                  padding: "15px",
                  maxWidth: "450px",
                  alignContent: "center",
                  marginTop: "5px",
                }}
              >
                <div className="signin-form">
                 
                  <form method="POST" className="register-form" id="login-form">
                    <div className="form-group">
                      <label htmlFor="your_name">
                        <i className="zmdi zmdi-account material-icons-name" />
                      </label>
                      <input
                        value={firstName}
                        onChange={onInputChange}
                        type="text"
                        name="firstName"
                        id="your_name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="your_pass">
                        <i className="zmdi zmdi-lock" />
                      </label>
                      <input
                        value={password}
                        onChange={onInputChange}
                        type="password"
                        name="password"
                        id="your_pass"
                        placeholder="Password"
                      />
                    </div>
                  </form>
                </div>
                <form>              
                  <div className="modal-footer">
                    <button
                      data-dismiss="modal"
                      aria-label="Close"
                      type="button"
                      onClick={handleSubmit}
                      className="btn btn-primary"
                    >
                      {/* <span type="button" onClick={handleGoogleLogin}>Sign In</span> */}
                      <span aria-hidden="true">Register</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
