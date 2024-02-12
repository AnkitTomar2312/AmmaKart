import React, { useState } from "react";
import ListItems from "../ListItems.js/ListItems";
const Products = () => {
  const [item, setItem] = useState([
    {
      thumbnail: "placeholder.png",
      price: "450",
      discountedPrice: "340",
      title: "Title 1",
    },
    {
      thumbnail: "placeholder.png",
      price: "200",
      discountedPrice: "150",
      title: "Title 2",
    },
    {
      thumbnail: "placeholder.png",
      price: "650",
      discountedPrice: "500",
      title: "Title 3",
    },
  ]);
  return (
    <div className="product-list--wrapper">
      {item.map((i, index) => {
        return <ListItems key={index} data={i} />;
      })}
    </div>
  );
};

export default Products;
