import React from "react";
import { useState } from "react";
const Card = ({cardType,price}) => {
   
  const [isClicked, setClicked] = useState(false);
  const handleClickn = () => {
    // setClicked(!isClicked);
    if (isClicked) {
      if (window.confirm("Unsbscribe ?")) {
        setClicked(false);
      } else {
        setClicked(true);
      }
    }else{
        setClicked(true)
    }
  };
  return (
    <>
    <div className="-card-bg-xl">
        <div className="-card-title-">
        <h3 className="-anim-scale-down" >{ cardType[0].toUpperCase() + cardType.substring(1)} Subscription</h3>
        <h5 className={`-title-anim-fade- ${cardType}`}> {price}/-</h5>
        </div>
       
      <div
        onClick={handleClickn}
        id="-btn-"
        className={`-btn- ${isClicked ? "-btn-clicked-" : ""}`}
      >
        {isClicked ? "subscribed" : "subscribe"}
      </div>
    </div> 
    </>
  );
};

export default Card;
