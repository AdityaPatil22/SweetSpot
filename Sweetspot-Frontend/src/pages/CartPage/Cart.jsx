import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../store/slices/cartSlice";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity({ id: itemId }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity({ id: itemId }));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
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
                <th scope="col">Clear</th>
              </tr>
            </thead>
            <tbody>
              {cartItems == 0 ? (<div className="fw-bold mt-4">No Items in the cart</div>): (cartItems.map((item) => (
                <tr key={item.id}>
                  <th scope="row">
                    <img
                      src={item.imageUrl}
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: "80px", height: "80px" }}
                      alt={item.title}
                    />
                  </th>
                  <td>
                    <p className="mb-0 mt-4">{item.title}</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">₹ {item.price}</p>
                  </td>
                  <td>
                    <div
                      className="input-group quantity mt-4"
                      style={{ width: "100px" }}
                    >
                      <button
                        className="btn btn-sm btn-minus rounded-circle bg-light border"
                        onClick={() => handleDecrement(item.id)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control form-control-sm text-center border-0"
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        className="btn btn-sm btn-plus rounded-circle bg-light border"
                        onClick={() => handleIncrement(item.id)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">₹{item.price * item.quantity}</p>
                  </td>
                  <td>
                    <button
                      className="btn btn-md rounded-circle bg-light border mt-4"
                      onClick={() => handleRemove(item.id)}
                    >
                      <i className="fa fa-times text-danger"></i>
                    </button>
                  </td>
                </tr>
              )))}
              
            </tbody>
          </table>
        </div>
        <hr className="hr-margin" />
        <div className="row g-4 justify-content-center">
          <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
            <div className="bg-light rounded checkout-box">
              <div className="p-4">
                <h1 className="display-6 mb-4 fw-bold d-flex justify-content-center">
                  Cart <span className="fw-normal">Total</span>
                </h1>
                <div className="d-flex justify-content-between mb-4">
                  <h5 className="mb-0 me-4">Subtotal:</h5>
                  <p className="mb-0">₹{cartTotal}</p>
                </div>
                <p className="mb-0 text-end">Shipping to Address</p>
              </div>
              <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                <h5 className="mb-0 ps-4 me-4">Total</h5>
                <p className="mb-0 pe-4">₹{cartTotal}</p>
              </div>
              <Link to="/checkout">
                <button className="btn border-secondary rounded-pill px-3 py-3 text-uppercase mb-4 ms-4 checkout-btn">
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
