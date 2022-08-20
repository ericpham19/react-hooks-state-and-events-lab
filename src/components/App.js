import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [background, setBackground] = useState (false)

    

    function handleClick (){
      setBackground((background) => !background)
    }  
  
  
 
  

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (background ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}>{background ? "dark" : "light"}</button> 
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
