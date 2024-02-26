import React from "react";
import Modal from "./Modal/Modal";
const OrderSuccess = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className="order-container">
        <div className="orer-container--success">
          <img
            src="./assets/icons/order_success.svg"
            alt="success"
            className="img-fluid"
          />
          <div className="message">
            <h1>Order SuccessFully Placed!</h1>
            <span>Order ID #{Math.random().toString().slice(2)}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OrderSuccess;
