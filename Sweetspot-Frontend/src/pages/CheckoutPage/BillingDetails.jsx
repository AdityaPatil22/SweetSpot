import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";
import "./BillingDetails.css";

function BillingDetails() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    town: "",
    zipcode: "",
    mobile: "",
    email: "",
  });

  const finalAmount = cartTotal - cartTotal / 10 + 50;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="mb-4">Billing details</h1>
        <form onSubmit={handleSubmit}>
          <div className="row g-5">
            <div className="col-md-12 col-lg-6 col-xl-7">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100">
                    <label className="form-label my-3">
                      First Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100">
                    <label className="form-label my-3">
                      Last Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Address <sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="House Number Street Name"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Town/City<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter town or city"
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Postcode/Zip<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter zip code"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Mobile<sup>*</sup>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Mobile number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Email Address<sup>*</sup>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-5">
              <div className="table-responsive scrollable-table">
                <table className="table">
                  <thead className="sticky-thead">
                    <tr>
                      <th scope="col">Products</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems == 0 ? (
                      <div className="fw-bold mt-4 d-flex justify-content-center">
                        No Items in the cart
                      </div>
                    ) : (
                      cartItems.map((item) => (
                        <tr key={item.id}>
                          <th scope="row">
                            <div className="d-flex align-items-center mt-2">
                              <img
                                src={item.imageUrl}
                                className="img-fluid rounded-circle"
                                style={{ width: "90px", height: "90px" }}
                                alt=""
                              />
                            </div>
                          </th>
                          <td className="py-5">{item.title}</td>
                          <td className="py-5">₹ {item.price}</td>
                          <td className="py-5 d-flex justify-content-center">
                            {item.quantity}
                          </td>
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
                <Link to="/payment">
                  <button
                    type="submit"
                    className="btn border-secondary py-3 px-4 text-uppercase w-100 placeorder-btn"
                  >
                    Place Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BillingDetails;
