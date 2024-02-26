import React, { useState } from "react";
import Modal from "../Modal/Modal";
const ListItems = ({ data, TitleUpdateHandler, onAdd, onRemove }) => {
  //const [counter, setCounter] = useState(1);
  const [message, setMessage] = useState("Not added to the cart yet!");
  const [showModal, setShowModal] = useState(false);
  // console.log(data.quantity);
  const handleClick = (data) => {
    setMessage("Added to the cart");
    onAdd(data.id);
  };
  const descreaseCounterByOne = (event) => {
    event.stopPropagation();
    onRemove(data.id);
    // if (counter <= 1) {
    //setAdded(false);
    //   setMessage("Not added to the cart yet!");
    //   onRemove(data.id);
    // } else {
    //   //setCounter(counter - 1);
    // }
  };
  const increaseCounterByOne = (event) => {
    event.stopPropagation();
    onAdd(data.id);
    //setCounter(counter + 1);
  };
  const handleModal = () => {
    setShowModal((previousState) => !previousState);
  };
  return (
    <>
      <div className={"item-card"}>
        <img
          onClick={handleModal}
          className={"img-fluid"}
          src={`./assets/images/${data.thumbnail}`}
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
        {/* <button onClick={() => TitleUpdateHandler(data.id)}>click</button> */}
        {data.quantity < 1 ? (
          <button
            className={"cart-add"}
            onClick={() => {
              handleClick(data);
            }}
          >
            <span>Add to Cart</span>
            <img src="./assets/icons/add_cart.svg" alt="addtocartsvg" />
          </button>
        ) : (
          <div className={"cart-addon"}>
            <button onClick={descreaseCounterByOne}>
              <span>-</span>
            </button>
            <span className={"counter"}>{data.quantity}</span>
            <button onClick={increaseCounterByOne}>
              <span>+</span>
            </button>
          </div>
        )}
      </div>
      {showModal && (
        <Modal onClose={handleModal}>
          <div className="item-card__modal">
            <div className="img-wrap">
              <img
                className={"img-fluid"}
                src={`./assets/images/${data.thumbnail}`}
                alt="placeholder"
              />
            </div>
            <div className="meta">
              <h3>{data?.title}</h3>
              <div className={"pricing"}>
                <span>{data.discountedPrice}</span>
                <small>
                  <strike>{data.price}</strike>
                </small>
              </div>
              <p>{data.description}</p>
              {data.quantity < 1 ? (
                <button
                  className={"cart-add"}
                  onClick={() => {
                    handleClick(data);
                  }}
                >
                  <span>Add to Cart</span>
                  <img src="./assets/icons/add_cart.svg" alt="addtocartsvg" />
                </button>
              ) : (
                <div className={"cart-addon "}>
                  <button onClick={descreaseCounterByOne}>
                    <span>-</span>
                  </button>
                  <span className={"counter"}>{data.quantity}</span>
                  <button onClick={increaseCounterByOne}>
                    <span>+</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ListItems;
