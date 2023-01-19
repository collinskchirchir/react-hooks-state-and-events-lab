import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("")
  const [buttonText, setButtonText] = useState("Add to Cart")
  const [buttonStyle, setButtonStyle] = useState("add")
  
  const [clickCheck, setClickCheck] = useState(true)
  function handleClick(){
    if(clickCheck){
      setInCart("in-cart");
      setButtonText("Remove From Cart")
      setButtonStyle("remove")
      setClickCheck(!clickCheck)
    }
    else{
      setInCart("");
      setButtonText("Add to Cart")
      setButtonStyle("add")
      setClickCheck(!clickCheck)
    }
  }
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={buttonStyle}>{buttonText}</button>
    </li>
  );
}

export default Item;
