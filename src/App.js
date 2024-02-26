import React, { useState } from "react";
import Products from "./components/Products/Products";
import HomeLayout from "./Layouts/HomeLayout";
import ProductForm from "./components/ProductForm/ProductForm";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [eventQueue, setEventQueue] = useState({
    id: "",
    type: "",
  });
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

  const handleEventQueue = (id, type) => {
    setEventQueue({
      id,
      type,
    });
  };
  return (
    <HomeLayout
      cart={cartItems.length}
      items={cartItems}
      onhandleEvent={handleEventQueue}
    >
      <Products
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
        eventState={eventQueue}
      />
      {/* <ProductForm /> */}
    </HomeLayout>
  );
};

export default App;
