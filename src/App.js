import React, { useState } from "react";
import Products from "./components/Products/Products";
import HomeLayout from "./Layouts/HomeLayout";
import ProductForm from "./components/ProductForm/ProductForm";
const App = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleAddItem = () => {
    setCartItems(cartItems + 1);
  };
  const handleRemoveItem = () => {
    setCartItems(cartItems - 1);
  };
  return (
    <HomeLayout cart={cartItems}>
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
      {/* <ProductForm /> */}
    </HomeLayout>
  );
};

export default App;
