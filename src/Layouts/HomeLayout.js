import React from "react";
import Header from "../components/Header/Header";
import Subheader from "../components/SubHeader/Subheader";

const HomeLayout = ({ children, cart }) => {
  return (
    <div>
      <Header cart={cart} />
      <Subheader />
      {children}
    </div>
  );
};

export default HomeLayout;
