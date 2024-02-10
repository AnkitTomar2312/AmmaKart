import React from "react";
const ListItems = () => {
  return (
    <div className={"item-card"}>
      <img
        className={"img-fluid"}
        src="./assets/images/placeholder.png"
        alt="placeholder"
      />
      <div className={"item-card__information"}>
        <div className={"pricing"}>
          <span>Rs. 360</span>
          <small>
            <strike>Rs. 450</strike>
          </small>
        </div>
        <div className={"title"}>
          <h3>Title of the Item</h3>
        </div>
      </div>

      <button className={"cart-add"}>
        <span>Add to Cart</span>
        <img src="./assets/icons/add_cart.svg" alt="addtocartsvg" />
      </button>
    </div>
  );
};

export default ListItems;
