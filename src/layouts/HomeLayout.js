import React, { Children } from "react";
import Header from "../components/header/header";
import Navigation from "../components/header/nav";
const HomeLayout = ({ Children }) => {
  return (
    <div>
      <Header />
      {Children}
      <Navigation />
    </div>
  );
};

export default HomeLayout;
