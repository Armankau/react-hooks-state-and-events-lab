import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [category, setCategory] = useState("All")



  function handleChange(e){
    setCategory((category) => e.target.value)
  }

  console.log(category)
  let newItem;
  Filter()



  function Filter(){
    if (category === "All"){
      const newArray = items.map((item) => item)
      newItem = newArray

    }
    else{
      const newArray = items.filter((item) => item.category === category)
      newItem = newArray
    
    }
   }

   console.log(newItem)
  



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}


export default ShoppingList;
