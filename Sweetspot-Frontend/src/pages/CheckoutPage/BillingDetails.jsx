import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./BillingDetails.css";

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .matches(/^[A-Za-z\s]+$/, "First name can only contain letters"),

  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .matches(/^[A-Za-z\s]+$/, "Last name can only contain letters"),

  address: Yup.string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters"),

  city: Yup.string()
    .required("Town/City is required")
    .min(2, "Town/City must be at least 2 characters"),

  zipcode: Yup.string()
    .required("Zipcode is required")
    .matches(/^[0-9]{6}$/, "Please enter a valid 6-digit zipcode"),

  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
});

function BillingDetails() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const finalAmount = Math.round(cartTotal - cartTotal / 10 + 50);

  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipcode: "",
    mobile: "",
  };

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const orderData = {
        ...values,
        cartItems,
        cartTotal: finalAmount,
        orderDate: new Date().toISOString(),
        orderStatus: "pending",
      };
      const response = await axios.post(
        "https://sweetspot-p34g.onrender.com/api/shipping",
        orderData,
        {
          withCredentials: true,
        }
      );
      if (response.data) {
        localStorage.setItem("currentOrder", JSON.stringify(orderData));
        navigate("/payment");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      setStatus({
        success: false,
        error: "Failed to submit order. Please try again.",
      });

      setTimeout(() => {
        setStatus("");
      }, 2000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="mb-4">Billing Details</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isValid, dirty, status, isSubmitting }) => (
            <Form>
              <div className="row g-5">
                <div className="col-md-12 col-lg-6 col-xl-7">
                  {status && status.error && (
                    <div className="alert alert-danger" role="alert">
                      {status.error}
                    </div>
                  )}
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <div className="form-item w-100">
                        <label className="form-label my-3">
                          First Name<sup>*</sup>
                        </label>
                        <Field
                          type="text"
                          name="firstName"
                          className={`form-control ${
                            errors.firstName && touched.firstName
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {errors.firstName && touched.firstName && (
                          <div className="invalid-feedback">
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <div className="form-item w-100">
                        <label className="form-label my-3">
                          Last Name<sup>*</sup>
                        </label>
                        <Field
                          type="text"
                          name="lastName"
                          className={`form-control ${
                            errors.lastName && touched.lastName
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {errors.lastName && touched.lastName && (
                          <div className="invalid-feedback">
                            {errors.lastName}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Address <sup>*</sup>
                    </label>
                    <Field
                      type="text"
                      name="address"
                      className={`form-control ${
                        errors.address && touched.address ? "is-invalid" : ""
                      }`}
                      placeholder="House Number Street Name"
                    />
                    {errors.address && touched.address && (
                      <div className="invalid-feedback">{errors.address}</div>
                    )}
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Town/City<sup>*</sup>
                    </label>
                    <Field
                      type="text"
                      name="city"
                      className={`form-control ${
                        errors.city && touched.city ? "is-invalid" : ""
                      }`}
                      placeholder="Enter town or city"
                    />
                    {errors.city && touched.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Postcode/Zip<sup>*</sup>
                    </label>
                    <Field
                      type="text"
                      name="zipcode"
                      className={`form-control ${
                        errors.zipcode && touched.zipcode ? "is-invalid" : ""
                      }`}
                      placeholder="Enter zip code"
                    />
                    {errors.zipcode && touched.zipcode && (
                      <div className="invalid-feedback">{errors.zipcode}</div>
                    )}
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Mobile<sup>*</sup>
                    </label>
                    <Field
                      type="tel"
                      name="mobile"
                      className={`form-control ${
                        errors.mobile && touched.mobile ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Mobile number"
                    />
                    {errors.mobile && touched.mobile && (
                      <div className="invalid-feedback">{errors.mobile}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-5">
                  <div className="table-responsive scrollable-table">
                    <table className="table">
                      <thead className="sticky-thead">
                        <tr>
                          <th scope="col">Products</th>
                          <th scope="col">Name</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.length === 0 ? (
                          <tr>
                            <td colSpan="5">
                              <div className="fw-bold mt-4 d-flex justify-content-center">
                                No Items in the cart
                              </div>
                            </td>
                          </tr>
                        ) : (
                          cartItems.map((item) => (
                            <tr key={item.id}>
                              <th scope="row">
                                <img
                                  src={item.imageUrl}
                                  className="img-fluid"
                                  alt=""
                                />
                              </th>
                              <td className="py-5">{item.title}</td>
                              <td className="py-5">{item.quantity}</td>
                              <td className="py-5">
                                ₹ {item.price * item.quantity}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                  <hr />
                  <div className="d-flex fw-bold h2 justify-content-center align-items-center mt-2">
                    Amount to Pay : ₹ {finalAmount}
                  </div>
                  <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                    <button
                      type="submit"
                      className="btn border-secondary py-3 px-4 text-uppercase w-100 placeorder-btn mt-4"
                      disabled={!(isValid && dirty) || isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default BillingDetails;
