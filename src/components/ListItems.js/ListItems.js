import React from "react";
const ListItems = ({ data }) => {
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

      <button
        className={"cart-add"}
        onClick={() => {
          console.log(data);
        }}
      >
        <span>Add to Cart</span>
        <img src="./assets/icons/add_cart.svg" alt="addtocartsvg" />
      </button>
    </div>
  );
};

export default ListItems;
