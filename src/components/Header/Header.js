import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Search from "../SearchData";
import { useNavigate } from "react-router-dom";
const Header = ({ cart, items, onhandleEvent }) => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);
  useEffect(() => {
    let isAdded = localStorage.getItem("authResponse");
    if (isAdded) {
      isAdded = JSON.parse(isAdded);
      console.log(isAdded.data.email);
      if (isAdded.data.email) {
        setShowLogin(false);
      }
    }
  }, []);

  return (
    <>
      <header>
        <div className="nav-brand">
          <a to="/">
            <span style={{ color: "white", fontWeight: "600" }}>AmaKart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </a>
        </div>
        <div className="searchBox-container">
          <Search />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg> */}
        </div>
        {showLogin ? (
          <button
            className="login-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Signup
          </button>
        ) : (
          <div className="cart-container">
            <Cart cart={cart} items={items} onhandleEvent={onhandleEvent} />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
