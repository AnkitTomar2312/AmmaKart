import React from "react";
import Header from "../components/Header/Header";
import Subheader from "../components/SubHeader/Subheader";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Subheader />
      {children}
    </div>
  );
};

export default HomeLayout;
