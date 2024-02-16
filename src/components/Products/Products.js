import React, { useEffect, useState } from "react";
import ListItems from "../ListItems.js/ListItems";
import axios from "axios";
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

  useEffect(() => {
    // fetch(
    //   "https://ammakart-49f10-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));

    axios
      .get(
        "https://ammakart-49f10-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
      )
      .then((response) => {
        const data = response.data;
        const transformData = data.map((item, index) => {
          return {
            ...item,
            index,
          };
        });
        console.log(transformData);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="product-list--wrapper">
      {item.map((i) => {
        return <ListItems key={i.id} data={i} />;
      })}
    </div>
  );
};

export default Products;
