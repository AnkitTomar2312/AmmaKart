import React, { useState } from "react";
import Products from "./components/Products/Products";
import HomeLayout from "./Layouts/HomeLayout";
import ProductForm from "./components/ProductForm/ProductForm";
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (item) => {
    let items = [...cartItems];
    let index = items.findIndex((i) => i.id === item.id);
    if (index > -1) {
      items[index] = item;
    } else {
      items.push(item);
    }
    setCartItems([...items]);
  };
  const handleRemoveItem = (item) => {
    let items = [...cartItems];
    let index = items.findIndex((i) => i.id === item.id);

    if (items[index].quantity === 0) {
      items.splice(index, 1);
    } else {
      item[index] = item;
    }
    setCartItems([...items]);
  };
  return (
    <HomeLayout cart={cartItems.length} items={cartItems}>
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
      {/* <ProductForm /> */}
    </HomeLayout>
  );
};

export default App;
