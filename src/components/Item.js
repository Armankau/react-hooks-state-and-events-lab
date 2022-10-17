import React, {useState} from "react";

function Item({ name, category }) {

  
  const [cart, cartstatus] = useState(false)
  const Name = cart ? "in-cart" : ""
  const text = cart? "Remove From Cart": "Add to Cart"
  

  function handleClick(){
    cartstatus((cart) => !cart)
  }

  



  return (
    <li className={Name}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{text}</button>
    </li>
  );
}

export default Item;
