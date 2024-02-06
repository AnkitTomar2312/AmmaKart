import React, { Children } from "react";
import Header from "../components/header/header";
import Navigation from "../components/header/nav";
const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <div style={{ position: "fixed", top: "55px ", width: "100vw" }}>
        <Navigation />
      </div>
    </div>
  );
};

export default HomeLayout;
