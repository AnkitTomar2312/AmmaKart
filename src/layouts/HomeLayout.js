import React from "react";
import Header from "../components/Header/Header";
import Subheader from "../components/SubHeader/Subheader";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../components/Error";
import Login from "../components/Auth/index";
import PrivateComponent from "../components/PrivateComponent";
import Test from "../components/test";
const HomeLayout = ({ children, cart, items, onhandleEvent }) => {
  return (
    <div>
      <Header cart={cart} items={items} onhandleEvent={onhandleEvent} />
      <Subheader />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Login />} />
        <Route path="/:type(login|signup)" exact element={Login} /> */}
        <Route path={"/404"} exact element={<ErrorPage />} />
        {/* <Route path={"/:category?"} element={<Test />} /> */}
        <Route element={<PrivateComponent />}>
          <Route path={"/:category?"} element={children} />
        </Route>
      </Routes>
    </div>
  );
};

export default HomeLayout;
