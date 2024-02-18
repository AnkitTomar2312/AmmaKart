import React, { useEffect, useState } from "react";
import ListItems from "../ListItems.js/ListItems";
import axios from "axios";
import Loader from "../Loader/Loader";
const Products = () => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);
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
    } finally {
      setLoader(false);
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
    <>
      <div className="product-list--wrapper">
        {item.map((i) => {
          return (
            <ListItems
              key={i.index}
              data={i}
              TitleUpdateHandler={handleUpdate}
            />
          );
        })}
      </div>
      {loader && <Loader />}
    </>
  );
};

export default Products;
