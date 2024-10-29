import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./AddItemsForm.css";

function AddItemsForm() {
  const [backendError, setBackendError] = useState("");
  const navigate = useNavigate();

  // Define Yup validation schema
  const validationSchema = Yup.object({
    productName: Yup.string()
      .min(3, "Product Name must be at least 3 characters")
      .required("Product Name is required"),
    productDescription: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    productPrice: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be a positive number")
      .required("Price is required"),
    productCategory: Yup.string().required("Please select a category"),
  });

  // Initialize Formik with initialValues, validationSchema, and onSubmit handler
  const formik = useFormik({
    initialValues: {
      productName: "",
      productDescription: "",
      productPrice: "",
      productImage: "",
      productCategory: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3000/api/products", values);
        navigate("/");
      } catch (error) {
        if (error.response) {
          setBackendError(error.response.statusText);
        } else {
          setBackendError("An unexpected error occurred");
        }
        setTimeout(() => setBackendError(""), 2000);
      }
    },
  });

  return (
    <>
      {backendError && (
        <div className="alert alert-danger" role="alert">
          {backendError}
        </div>
      )}
      <div className="form-container">
        <form className="row g-3 col-10" onSubmit={formik.handleSubmit}>
          <div className="col-md-12">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              {...formik.getFieldProps("productName")}
              placeholder="Enter Product Name"
            />
            {formik.touched.productName && formik.errors.productName && (
              <p className="text-danger">{formik.errors.productName}</p>
            )}
          </div>

          <div className="col-md-12">
            <label htmlFor="productDescription" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="productDescription"
              {...formik.getFieldProps("productDescription")}
              placeholder="Enter Description"
            />
            {formik.touched.productDescription && formik.errors.productDescription && (
              <p className="text-danger">{formik.errors.productDescription}</p>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="productPrice" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="productPrice"
              {...formik.getFieldProps("productPrice")}
              placeholder="Enter Product Price"
            />
            {formik.touched.productPrice && formik.errors.productPrice && (
              <p className="text-danger">{formik.errors.productPrice}</p>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="productImage" className="form-label">
              Product Image
            </label>
            <input
              type="file"
              className="form-control"
              id="productImage"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    formik.setFieldValue("productImage", reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              className="form-control"
              id="productCategory"
              {...formik.getFieldProps("productCategory")}
            >
              <option value="">Select a category</option>
              <option value="Cakes">Cakes</option>
              <option value="Candies">Candies</option>
              <option value="Cookies">Cookies</option>
              <option value="Bakery">Bakery</option>
            </select>
            {formik.touched.productCategory && formik.errors.productCategory && (
              <p className="text-danger">{formik.errors.productCategory}</p>
            )}
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddItemsForm;
