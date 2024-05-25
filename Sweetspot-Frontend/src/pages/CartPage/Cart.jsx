import { Link } from 'react-router-dom';
import "./Cart.css"

function Cart() {
  const redirectToCheckout = () => {
    // Function to handle redirect to checkout
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="table-responsive scrollable-table">
          <table className="table">
            <thead className="sticky-thead">
              <tr>
                <th scope="col">Products</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: '80px', height: '80px' }}
                      alt=""
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">Candies</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">₹299</p>
                </td>
                <td>
                  <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      value="1"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 mt-4">₹299</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1499195333224-3ce974eecb47?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: '80px', height: '80px' }}
                      alt=""
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">Sugar Candy</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">₹299</p>
                </td>
                <td>
                  <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      value="1"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 mt-4">₹299</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1619685350081-854862f9cbb8?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: '80px', height: '80px' }}
                      alt=""
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">Cup Cakes</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">₹199</p>
                </td>
                <td>
                  <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      value="1"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 mt-4">₹399</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1631397833253-aac001967638?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: '80px', height: '80px' }}
                      alt=""
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">Doughnut</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">₹399</p>
                </td>
                <td>
                  <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      value="1"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 mt-4">₹299</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="hr-margin" />
        <div className="row g-4 justify-content-center">
          <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
            <div className="bg-light rounded checkout-box">
              <div className="p-4">
                <h1 className="display-6 mb-4 fw-bold">
                  Cart <span className="fw-normal">Total</span>
                </h1>
                <div className="d-flex justify-content-between mb-4">
                  <h5 className="mb-0 me-4">Subtotal:</h5>
                  <p className="mb-0">₹960</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h5 className="mb-0 me-4">Shipping</h5>
                  <div>
                    <p className="mb-0">Flat rate: ₹300</p>
                  </div>
                </div>
                <p className="mb-0 text-end">Shipping to Address</p>
              </div>
              <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                <h5 className="mb-0 ps-4 me-4">Total</h5>
                <p className="mb-0 pe-4">₹990</p>
              </div>
              <Link to="/checkout-page">
                <button
                  className="btn border-secondary rounded-pill px-3 py-3 text-uppercase mb-4 ms-4 checkout-btn"
                  type="button"
                  onClick={redirectToCheckout}
                >
                  Proceed Checkout
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
