import React, { useEffect, useState } from "react";
import ListItems from "../ListItems.js/ListItems";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
const Products = ({ onAddItem, onRemoveItem, eventState }) => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);
  const params = useParams();
  useEffect(() => {
    async function fetchItems() {
      try {
        let slug = "items.json";
        if (params.category) {
          slug = `items-${params.category}.json`;
        }
        const result = await axios.get(
          `https://ammakart-49f10-default-rtdb.asia-southeast1.firebasedatabase.app/${slug}`
        );

        let data = result.data;
        let transformData = data.map((item, index) => {
          return { ...item, quantity: 0, id: index };
        });

        setItem(transformData);
      } catch (error) {
        console.log({ Error: error });
        alert(error);
      } finally {
        setLoader(false);
      }
    }
    fetchItems();
    return () => {
      setItem([]);
      setLoader(true);
    };
  }, [params.category]);

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
    if (eventState.id > -1) {
      if (eventState.type === 1) {
        handleAddItem(eventState.id);
      } else if (eventState.type === -1) {
        handleRemoveItem(eventState.id);
      }
    }
  }, [eventState]);

  const handleAddItem = (id) => {
    let data = [...item];
    let index = data.findIndex((i) => i.id === id);
    data[index].quantity += 1;
    setItem([...data]);

    onAddItem(data[index]);
  };
  const handleRemoveItem = (id) => {
    let data = [...item];
    let index = data.findIndex((i) => i.id === id);
    if (data[index].quantity !== 0) {
      data[index].quantity -= 1;
      setItem([...data]);
      onRemoveItem(data[index]);
    }
  };
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
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
            />
          );
        })}
      </div>
      {loader && <Loader />}
    </>
  );
};

export default Products;
