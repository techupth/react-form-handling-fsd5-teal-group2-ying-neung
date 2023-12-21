import { useState } from "react";

function ProductForm() {
  const [nameInput,displayName] = useState("")
  const [priceInput,displayPrice] = useState("")
  const [imageInput,displayImage] = useState("")
  const [descriptionInput,displayDescription] = useState("")
 
  function handleSubmit(e) {
    e.preventDefault();
    const objectProduct = {name:nameInput , price:priceInput , image:imageInput , description:descriptionInput}
    alert(`{name:${nameInput }, price:${priceInput} , image:${imageInput} , description:${descriptionInput}}`)
  }
  
  return (
    <form className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => { displayName(e.target.value)}}
            value={nameInput}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {displayImage(e.target.value)}}
            value={imageInput}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {displayPrice(e.target.value)}}
            value={priceInput}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {displayDescription(e.target.value)}}
            value={descriptionInput}
            rows={4}
            cols={30}
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" onClick={handleSubmit}>Create</button>

{/* <button type="submit" onClick={(e)=>{e.preventDefault()
        const objectProduct = {name:nameInput , price:priceInput , image:imageInput , description:descriptionInput}
        alert(JSON.stringify(objectProduct))}}>Create</button> */}
      </div>
    </form>
  );
}






export default ProductForm;
