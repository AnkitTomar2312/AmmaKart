import React, { useEffect, useState } from "react";
import ListItems from "../ListItems.js/ListItems";
import axios from "axios";
import Loader from "../Loader/Loader";
const Products = ({ onAddItem, onRemoveItem }) => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);
  const [presentItems, setPresentItems] = useState([]);
  // useEffect(() => {
  //   async function fetchItems() {
  //     try {
  //       const response = await axios.get(
  //         "https://ammakart-49f10-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
  //       );
  //       const data = response.data;
  //       const transformedData = data.map((item, index) => {
  //         return {
  //           ...item,
  //           quantity: 0,
  //           id: index,
  //         };
  //       });
  //       // setLoader(false)
  //       setItem(transformedData);
  //     } catch (error) {
  //       // setLoader(false)
  //       console.log("Error: ", error);
  //       alert("Some error occurred");
  //     } finally {
  //       setLoader(false);
  //     }
  //   }

  //   fetchItems();
  // }, []);
  const handleItem = async () => {
    try {
      const result = await axios.get(
        "https://ammakart-49f10-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
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
  }, []);

  const handleAddItem = (id) => {
    let data = [...item];
    let index = data.findIndex((i) => i.id === id);
    data[index].quantity += 1;
    setItem([...data]);
    // if (presentItems.indexOf(id) > -1) {
    //   return;
    // }
    // setPresentItems([...presentItems, id]);
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

    // let index = presentItems.indexOf(id);
    // if (index > -1) {
    //   let item = [...presentItems];
    //   item.splice(index, 1);
    //   setPresentItems([...item]);
    //   onRemoveItem();
    // }
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
