import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ id, imageUrl, title, description, price }) {
  const [addItem, setAddItem] = useState("");
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({ id, imageUrl, title, description, price, quantity: 1 })
    );
    setAddItem("Item Added to cart");
    setTimeout(() => {
      setAddItem("");
    }, 2000);
  };

  Card.propTypes = {
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };

  return (
    <div className="card-container">
      <div className="rounded position-relative card-layout">
        <div className="sweet-img">
          <img
            src={imageUrl}
            className="img-fluid w-100 rounded-top"
            alt={title}
          />
        </div>
        <div className="text-white px-3 py-2 rounded position-absolute sweet-head-text">
          {title}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4 className="mb-3">{title}</h4>
          <p className="mb-4">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-dark fs-5 fw-bold mb-0">₹ {price}</p>
            <button
              className="btn btn-primary px-3 cart-pill"
              onClick={handleAddToCart}
            >
              <i className="fa fa-shopping-bag me-2"></i> Add to cart
            </button>
          </div>
          {addItem && (
            <div className="alert alert-success mt-4" role="alert">
              {addItem}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
