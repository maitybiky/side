import React from "react";
import { TbCurrencyRupee } from "react-icons/tb";
import GradeIcon from '@mui/icons-material/Grade';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addTocart, removeFromcart } from "../Store/Slice/Cartslice";
const Indie = () => {
  const { id } = useParams();
  const [first, setfirst] = React.useState({})
 
  const { product, cart } = useSelector((state) => {
    console.log("id", state);
    return state;
  });
  const fetchProducts=async(id)=>{
    setfirst(product.data[id-1])
    
  }
  console.log(first);
React.useEffect(() => {
  fetchProducts(id)
}, [])

  const Dispatch = useDispatch();
  const add = (i) => {
    Dispatch(addTocart(i));
  };

  const deleteItem = (i) => {
    Dispatch(removeFromcart(i));
  };

  return (
    <div className="container">
      <div className="row">

      <div className="col-sm">
        <div className="card cbody" style={{ width: "17rem", height: "25rem" }}>
          <img
            src={first.image}
            className="card-img-top imgindie"
            alt="..."
          />
          
        </div>
      </div>

      <div className="col-sm" style={{ maxWidth: 500 }}>
        <br />
        <span style={{ margin: 10 }} className="center">
          {first.description}
        </span>
        <br />
        <p className=" left">
          <span className="fnt">Name</span> : {first.title}
        </p>

        <p className=" left">
          <span className="fnt">Category</span> :{" "}
          {first.category}
        </p>
        <p className=" left">
          <span className="fnt"> Price &nbsp;</span>
          <TbCurrencyRupee />
          {first.price} /-
        </p>

        {/* <p className=" fnt left">
          <span className="fnt"> Rating &nbsp;</span>
          {[...Array(Math.floor(product.data[id - 1].rating.rate))].map(() => (
             <GradeIcon color="primary" fontSize="small" />
          ))}
          {product.data[id - 1].rating.rate}
        </p> */}

        <div className="left">
          {cart.some((data) => data.id === first.id) ? (
            <button
              onClick={() => deleteItem(first.id)}
              type="button"
              className="btn btn-danger"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => {
                add(first);
              }}
              type="button"
              className="btn btn-success"
            >
              Add to Cart
            </button>
            
          )}
         
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Indie;
