import React, { useState } from "react";
import ListItems from "../ListItems.js/ListItems";
function ProductForm() {
  const [title, setTitle] = useState("Title of Item");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [thumbnail, setThumbnail] = useState("placeholder.png");
  const [item, setItem] = useState({
    image: thumbnail,
    title: title,
    discountedPrice: discount,
    price: price,
  });

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setItem({ ...item, title: e.target.value });
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
    setItem({ ...item, price: e.target.value });
  };
  const handleDiscount = (e) => {
    setDiscount(e.target.value);
    setItem({ ...item, discountedPrice: e.target.value });
  };
  const handleThumbnail = (e) => {
    setThumbnail(e.target.value);
    setItem({ ...item, image: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    setItem({
      image: thumbnail,
      title: title,
      discountedPrice: discount,
      price: price,
    });
  };
  return (
    <div className={"product-wrapper"}>
      <div className={"form"}>
        <form>
          <h2>Item Card Details</h2>
          <div className={"input-field"}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="enter title..."
              onChange={(e) => {
                handleTitle(e);
              }}
              value={title}
            />
          </div>
          <div className={"input-field"}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              placeholder="0"
              onChange={(e) => {
                handlePrice(e);
              }}
              value={price}
            />
          </div>
          <div className={"input-field"}>
            <label htmlFor="price">Discounted Price</label>
            <input
              type="number"
              placeholder="0"
              onChange={(e) => {
                handleDiscount(e);
              }}
              value={discount}
            />
          </div>
          <div className={"input-field"}>
            <label htmlFor="price">Thumbnail</label>
            <input
              type="text"
              placeholder="0"
              onChange={(e) => {
                handleThumbnail(e);
              }}
              value={thumbnail}
            />
          </div>
          <div className={"submit-wrap"}>
            <button
              onClick={(e) => {
                handleForm(e);
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="TwoWayCart">
        <ListItems data={item} />
      </div>
    </div>
  );
}

export default ProductForm;
