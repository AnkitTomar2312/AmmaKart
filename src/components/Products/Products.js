import React, { useState } from "react";
import ListItems from "../ListItems.js/ListItems";
const Products = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      thumbnail: "placeholder.png",
      price: "450",
      discountedPrice: "340",
      title: "Title 1",
    },
    {
      id: 2,
      thumbnail: "placeholder.png",
      price: "200",
      discountedPrice: "150",
      title: "Title 2",
    },
    {
      id: 3,
      thumbnail: "placeholder.png",
      price: "650",
      discountedPrice: "500",
      title: "Title 3",
    },
  ]);
  return (
    <div className="product-list--wrapper">
      {item.map((i) => {
        return <ListItems key={i.id} data={i} />;
      })}
    </div>
  );
};

export default Products;
