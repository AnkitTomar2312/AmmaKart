import React, { useState } from "react";
import ListItems from "../ListItems.js/ListItems";
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
    setItem({
      thumbnail: thumbnail,
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
              name="title"
              type="text"
              placeholder="enter title..."
              onChange={handleInput}
              value={item.title}
            />
          </div>
          <div className={"input-field"}>
            <label htmlFor="price">Price</label>
            <input
              name="price"
              type="number"
              placeholder="0"
              onChange={handleInput}
              value={item.price}
            />
          </div>
          <div className={"input-field"}>
            <label htmlFor="price">Discounted Price</label>
            <input
              name="discountedPrice"
              type="number"
              placeholder="0"
              onChange={handleInput}
              value={item.discount}
            />
          </div>
          <div className={"input-field"}>
            <label htmlFor="price">Thumbnail</label>
            <input
              name="thumbnail"
              type="text"
              placeholder="0"
              onChange={handleInput}
              value={item.thumbnail}
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
