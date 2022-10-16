import React from "react";
import { TbCurrencyRupee } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const cartitem = useSelector((state) => {
    console.log(state.cart);
    return state.cart;
  });

  return (
    <div style={{ marginTop: 100 }} className="container">
      <table className="table  table-borderless">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        {cartitem.map((item) => {
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
                </td>{" "}
                <td>
                  <h6>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <MdProductionQuantityLimits /> {item.quantity}
                  </h6>
                </td>
                
                 <td>
                  <h6>
                  
                     <button className="btn btn-success btn-sm"> out for delivery</button>
                  </h6>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Invoice;
