import React from "react";
import Header from "../components/Header/Header";
import Subheader from "../components/SubHeader/Subheader";

const HomeLayout = ({ children, cart, items }) => {
  return (
    <div>
      <Header cart={cart} items={items} />
      <Subheader />
      {children}
    </div>
  );
};

export default HomeLayout;
