import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./AddItemsForm.css";

function AddItemsForm() {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: "",
    prouctCategory: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        productImage: reader.result, // Store Base64 in productImage field
      }));
    };

    if (file) {
      reader.readAsDataURL(file); // Read file as Base64
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try{
        axios.post('http://localhost:3000/api/products', formData)
        navigate("/")
    } catch(error){
        console.error(error)
    }
  };

  return (
    <div className="form-container">
      <form className="row g-3 col-10">
        <div className="col-md-12">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={formData.productName}
            onChange={handleInputChange}
            placeholder="Enter Product Name"
            aria-describedby="productNameHelp"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="productDescription" className="form-label">
            Product Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="productDescription"
            value={formData.productDescription}
            onChange={handleInputChange}
            placeholder="Enter Description"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="productPrice"
            value={formData.productPrice}
            onChange={handleInputChange}
            placeholder="Enter Product Price"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="productImage" className="form-label">
            Product Image
          </label>
          <input type="file" className="form-control" id="productImage" onChange={handleImageUpload}/>
        </div>

        <div className="col-md-6">
          <label htmlFor="productCategory" className="form-label">
            Product Category
          </label>
          <select className="form-control" id="productCategory" value={formData.productCategory} onChange={handleInputChange}>
            <option>Cakes</option>
            <option>Candies</option>
            <option>Cookies</option>
            <option>Bakery</option>
          </select>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemsForm;
