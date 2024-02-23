import React from "react";
import Header from "../components/Header/Header";
import Subheader from "../components/SubHeader/Subheader";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../components/Error";

const HomeLayout = ({ children, cart, items, onhandleEvent }) => {
  return (
    <div>
      <Header cart={cart} items={items} onhandleEvent={onhandleEvent} />
      <Subheader />
      <Routes>
        <Route path={"/404"} exact element={<ErrorPage />} />
        <Route path={"/:category?"} element={children} />
      </Routes>
    </div>
  );
};

export default HomeLayout;
