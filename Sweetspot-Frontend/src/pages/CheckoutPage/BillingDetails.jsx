import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./BillingDetails.css"

function BillingDetails() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    town: '',
    zipcode: '',
    mobile: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  const redirectToPayment = () => {
    // Redirect to payment logic
    console.log("Redirecting to payment...");
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
                    <label className="form-label my-3">First Name<sup>*</sup></label>
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
                    <label className="form-label my-3">Last Name<sup>*</sup></label>
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
                <label className="form-label my-3">Address <sup>*</sup></label>
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
                <label className="form-label my-3">Town/City<sup>*</sup></label>
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
                <label className="form-label my-3">Postcode/Zip<sup>*</sup></label>
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
                <label className="form-label my-3">Mobile<sup>*</sup></label>
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
                <label className="form-label my-3">Email Address<sup>*</sup></label>
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
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center mt-2">
                          <img
                            src="https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="img-fluid rounded-circle"
                            style={{ width: '90px', height: '90px' }}
                            alt=""
                          />
                        </div>
                      </th>
                      <td className="py-5">Candies</td>
                      <td className="py-5">₹299</td>
                      <td className="py-5">2</td>
                      <td className="py-5">₹600.00</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center mt-2">
                          <img
                            src="https://images.unsplash.com/photo-1499195333224-3ce974eecb47?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="img-fluid rounded-circle"
                            style={{ width: '90px', height: '90px' }}
                            alt=""
                          />
                        </div>
                      </th>
                      <td className="py-5">Sugar Candy</td>
                      <td className="py-5">₹299</td>
                      <td className="py-5">2</td>
                      <td className="py-5">₹600.00</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center mt-2">
                          <img
                            src="https://images.unsplash.com/photo-1619685350081-854862f9cbb8?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="img-fluid rounded-circle"
                            style={{ width: '90px', height: '90px' }}
                            alt=""
                          />
                        </div>
                      </th>
                      <td className="py-5">Cup Cakes</td>
                      <td className="py-5">₹399</td>
                      <td className="py-5">3</td>
                      <td className="py-5">₹1000.00</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center mt-2">
                          <img
                            src="https://images.unsplash.com/photo-1619685350081-854862f9cbb8?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="img-fluid rounded-circle"
                            style={{ width: '90px', height: '90px' }}
                            alt=""
                          />
                        </div>
                      </th>
                      <td className="py-5">Cup Cakes</td>
                      <td className="py-5">₹399</td>
                      <td className="py-5">3</td>
                      <td className="py-5">₹1000.00</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="py-5">
                        <p className="mb-0 text-dark text-uppercase py-1">TOTAL</p>
                      </td>
                      <td className="py-5"></td>
                      <td className="py-5"></td>
                      <td className="py-5">
                        <div className="py-3 border-bottom border-top">
                          <p className="mb-0 text-dark">₹2130</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                <Link to="/payment-page">
                  <button
                    type="submit"
                    className="btn border-secondary py-3 px-4 text-uppercase w-100 placeorder-btn"
                    onClick={redirectToPayment}
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
