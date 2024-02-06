import React from "react";
import HomeLayout from "./layouts/HomeLayout";
import Products from "./components/Products/Products";
const App = () => {
  return (
    <div>
      <HomeLayout>
        <div
          style={{
            paddingTop: "100px",
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-start",
          }}
        >
          <Products />
        </div>
      </HomeLayout>
    </div>
  );
};

export default App;
