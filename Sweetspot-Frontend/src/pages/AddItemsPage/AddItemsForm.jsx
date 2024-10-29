import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./AddItemsForm.css";

function AddItemsForm() {
  const [backendError, setBackendError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
    productImage: Yup.mixed()
      .required("Image is required")
      .test("fileSize", "File size is too large", (value) => {
        return value && value.size <= 2000000;
      })
      .test("fileType", "Unsupported File Format", (value) => {
        return (
          value && (value.type === "image/jpeg" || value.type === "image/png")
        );
      }),
  });

  const formik = useFormik({
    initialValues: {
      productName: "",
      productDescription: "",
      productPrice: "",
      productImage: null,
      productCategory: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // First upload the image to Cloudinary
        const imageUrl = await uploadImageToCloudinary(values.productImage);
        
        // Then submit the form data with the image URL
        const formData = {
          ...values,
          productImage: imageUrl,
        };
        
        await axios.post("http://localhost:3000/api/products", formData);
        setSuccessMessage("Product added successfully!");
        formik.resetForm();

        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
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

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "sweet-spot");

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dgv6havjj/image/upload`,
      formData
    );
    return response.data.secure_url;
  };

  const handleImageChange = (event) => {
    formik.setFieldValue("productImage", event.target.files[0]);
  };

  return (
    <>
      {backendError && (
        <div className="alert alert-danger" role="alert">
          {backendError}
        </div>
      )}
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
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
            {formik.touched.productDescription &&
              formik.errors.productDescription && (
                <p className="text-danger">
                  {formik.errors.productDescription}
                </p>
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
              className={`form-control ${
                formik.touched.productImage && formik.errors.productImage
                  ? "is-invalid"
                  : ""
              }`}
              id="productImage"
              onChange={handleImageChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.productImage && formik.errors.productImage && (
              <p className="text-danger">{formik.errors.productImage}</p>
            )}
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
            {formik.touched.productCategory &&
              formik.errors.productCategory && (
                <p className="text-danger">{formik.errors.productCategory}</p>
              )}
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddItemsForm;