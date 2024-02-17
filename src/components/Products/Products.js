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

  const handleItem = async () => {
    try {
      const result = await axios.get(
        "https://ammakart-49f10-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
      );

      let data = result.data;
      let transformData = data.map((item, index) => {
        return { ...item, id: index };
      });

      setItem(transformData);
    } catch (error) {
      console.log({ Error: error });
      alert(error);
    }
  };

  const handleUpdate = async (id) => {
    const title = `Udated title at #ID ${id}`;
    try {
      const result = await axios.patch(
        `https://ammakart-49f10-default-rtdb.asia-southeast1.firebasedatabase.app/items/${id}.json`,
        {
          title: title,
        }
      );
    } catch (error) {
      console.log({ Error: error });
      alert(error);
    }
  };
  useEffect(() => {
    handleItem();
  }, [handleUpdate]);
  const updateTitle = () => {};
  return (
    <div className="product-list--wrapper">
      {item.map((i) => {
        return (
          <ListItems key={i.index} data={i} TitleUpdateHandler={handleUpdate} />
        );
      })}
    </div>
  );
};

export default Products;
