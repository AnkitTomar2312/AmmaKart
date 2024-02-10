import React from "react";
import Products from "./components/Products/Products";
import HomeLayout from "./Layouts/HomeLayout";
const App = () => {
  return (
    <HomeLayout>
      <Products />
    </HomeLayout>
  );
};

export default App;
