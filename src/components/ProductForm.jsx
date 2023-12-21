import React, { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`
    "name" : ${name} , 
    "price" : ${price} , 
    "image" : ${image} , 
    "description" : ${description}`);
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            value={name}
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            value={image}
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            value={price}
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            value={description}
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            rows={4}
            cols={30}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
