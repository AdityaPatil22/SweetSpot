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

  const finalAmount = Math.round(cartTotal - cartTotal / 10 + 50);

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
        <div className="scrollable-table">
          <table className="table align-middle text-center">
            <thead className="sticky-thead bg-light">
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
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="6" className="fw-bold text-center h4">
                    No Items in the cart
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item.id} >
                    <td>
                      <img
                        src={item.imageUrl}
                        className="img-fluid "
                        alt={item.title}
                      />
                    </td>
                    <td>
                      <p className="mb-0 fw-bold">{item.title}</p>
                    </td>
                    <td>
                      <p className="mb-0">₹ {item.price}</p>
                    </td>
                    <td >
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          className="btn btn-sm btn-minus rounded-circle bg-light border"
                          onClick={() => handleDecrement(item.id)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0 mx-1 w-25"
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
                      <p className="mb-0">₹ {item.price * item.quantity}</p>
                    </td>
                    <td>
                      <button
                        className="btn btn-md rounded-circle bg-light border"
                        onClick={() => handleRemove(item.id)}
                      >
                        <i className="fa fa-times text-danger"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <hr />
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4">
            <div className="bg-light rounded checkout-box p-4">
              <h1 className="display-6 mb-4 fw-bold text-center">
                Cart <span className="fw-normal">Total</span>
              </h1>
              <div className="d-flex justify-content-between mb-2">
                <h5>Discount :</h5>
                <p>10 %</p>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <h5>Shipping Charges :</h5>
                <p>₹ 50</p>
              </div>
              <div className="py-2 border-top border-bottom d-flex justify-content-between">
                <p className="h4 mt-3 mb-3">Total</p>
                <p className="h4 mt-3 mb-3">₹ {cartTotal === 0 ? 0 : finalAmount}</p>
              </div>
              {cartItems.length === 0 ? (
                <div className="h4 text-center mt-4 ">Your cart is empty</div>
              ) : (
                <Link to="/checkout">
                  <button className="btn btn-primary w-100 rounded-pill">
                    Proceed to Checkout
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
