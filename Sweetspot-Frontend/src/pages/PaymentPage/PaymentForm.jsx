import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/slices/cartSlice";
import "./PaymentForm.css";

function PaymentForm() {
  const cartTotal = useSelector(selectCartTotal);
  const finalAmount = Math.round(cartTotal - cartTotal / 10 + 50);

  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      <div className="container p-0 mb-5 mt-5">
        <div className="card px-4">
          <p className="h8 py-3">Payment Details</p>
          <form onSubmit={handleSubmit}>
            <div className="row gx-3">
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Card Holder Name</p>
                  <input
                    className="payment-form-control mb-3"
                    type="text"
                    placeholder="Name"
                    name="cardHolderName"
                    value={formData.cardHolderName}
                    onChange={handleInputChange}
                  ></input>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Card Number</p>
                  <input
                    className="payment-form-control mb-3"
                    type="text"
                    placeholder="1234 5678 435678"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  ></input>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Expiry</p>
                  <input
                    className="payment-form-control mb-3"
                    type="text"
                    placeholder="MM/YYYY"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleInputChange}
                  ></input>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">CVV/CVC</p>
                  <input
                    className="payment-form-control mb-3 pt-2"
                    type="password"
                    placeholder="***"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  ></input>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary-payment mb-3">
                  <Link to="/" className="text-white text-decoration-none">
                    <span className="ps-3 text-white">Pay ₹ {finalAmount}</span>
                    <span className="fas fa-arrow-right text-white"></span>
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
