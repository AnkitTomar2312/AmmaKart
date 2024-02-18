import React from "react";

const Form = (props) => {
  const handleInput = (e) => {
    props.onChangeForm(e);
  };
  return (
    <form onSubmit={props.onFormSubmit}>
      <h2>Item Card Details</h2>
      <div className={"input-field"}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          placeholder="enter title..."
          onChange={handleInput}
          value={props.item.title}
        />
      </div>
      <div className={"input-field"}>
        <label htmlFor="price">Price</label>
        <input
          name="price"
          type="number"
          placeholder="0"
          onChange={handleInput}
          value={props.item.price}
        />
      </div>
      <div className={"input-field"}>
        <label htmlFor="price">Discounted Price</label>
        <input
          name="discountedPrice"
          type="number"
          placeholder="0"
          onChange={handleInput}
          value={props.item.discount}
        />
      </div>
      <div className={"input-field"}>
        <label htmlFor="price">Thumbnail</label>
        <input
          name="thumbnail"
          type="text"
          placeholder="0"
          onChange={handleInput}
          value={props.item.thumbnail}
        />
      </div>
      <div className={"submit-wrap"}>
        <button
        //   onClick={(e) => {
        //     handleForm(e);
        //   }}
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default Form;
