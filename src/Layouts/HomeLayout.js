import React from "react";
import Header from "../components/Header/Header";
import Subheader from "../components/SubHeader/Subheader";

const HomeLayout = ({ children, cart, items, onhandleEvent }) => {
  return (
    <div>
      <Header cart={cart} items={items} onhandleEvent={onhandleEvent} />
      <Subheader />
      {children}
    </div>
  );
};

export default HomeLayout;
