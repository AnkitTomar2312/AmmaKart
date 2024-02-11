import React from "react";
import ListItems from "../ListItems.js/ListItems";
const Products = () => {
  const items = [
    {
      image: "placeholder.png",
      price: "450",
      discountedPrice: "340",
      title: "Title 1",
    },
    {
      image: "placeholder.png",
      price: "200",
      discountedPrice: "150",
      title: "Title 2",
    },
    {
      image: "placeholder.png",
      price: "650",
      discountedPrice: "500",
      title: "Title 3",
    },
  ];
  return (
    <div className="product-list--wrapper">
      <ListItems data={items[0]} />
      {/* <ListItems data={items[1]} />
      <ListItems data={items[2]} /> */}
    </div>
  );
};

export default Products;
