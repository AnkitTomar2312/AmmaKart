import React, { useState } from "react";
import ListItems from "../ListItems.js/ListItems";
import Form from "./Form";
function ProductForm() {
  const [title, setTitle] = useState("Title of Item");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [thumbnail, setThumbnail] = useState("placeholder.png");
  const [item, setItem] = useState({
    thumbnail: thumbnail,
    title: title,
    discountedPrice: discount,
    price: price,
  });
  const handleInput = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (item.discountedPrice > item.price) {
      alert("Discounted Price cannot be greater than price");
      return;
    }
    console.log("Item Updated!", item);
  };
  return (
    <div className={"product-wrapper"}>
      <div className={"form"}>
        <Form
          item={item}
          onChangeForm={handleInput}
          onFormSubmit={handleForm}
        />
      </div>
      <div className="TwoWayCart">
        <ListItems data={item} />
      </div>
    </div>
  );
}

export default ProductForm;
