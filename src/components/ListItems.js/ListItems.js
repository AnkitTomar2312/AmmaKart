import React, { useState } from "react";
const ListItems = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const [added, setAdded] = useState(false);
  const [message, setMessage] = useState("Not added to the cart yet!");
  const handleClick = (data) => {
    setMessage("Added to the cart");
    setAdded(true);
  };
  const descreaseCounterByOne = () => {
    if (counter <= 0) {
      setCounter(0);
      setAdded(false);
      setMessage("Not added to the cart yet!");
    } else {
      setCounter(counter - 1);
    }
  };
  const increaseCounterByOne = () => {
    setCounter(counter + 1);
  };
  return (
    <div className={"item-card"}>
      <img
        className={"img-fluid"}
        src={`./assets/images/${data.image}`}
        alt="placeholder"
      />
      <div className={"item-card__information"}>
        <div className={"pricing"}>
          <span>{data.discountedPrice}</span>
          <small>
            <strike>{data.price}</strike>
          </small>
        </div>
        <div className={"title"}>
          <h3>{data.title}</h3>
        </div>
      </div>
      <small className="cart-message">{message}</small>
      {added ? (
        <div className={"cart-addon"}>
          <button onClick={descreaseCounterByOne}>
            <span>-</span>
          </button>
          <span className={"counter"}>{counter}</span>
          <button onClick={increaseCounterByOne}>
            <span>+</span>
          </button>
        </div>
      ) : (
        <button
          className={"cart-add"}
          onClick={() => {
            handleClick(data);
          }}
        >
          <span>Add to Cart</span>
          <img src="./assets/icons/add_cart.svg" alt="addtocartsvg" />
        </button>
      )}
    </div>
  );
};

export default ListItems;
