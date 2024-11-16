import PropTypes from "prop-types";
import "./Card.css";

function Card({ imageUrl, title, price, onClick }) {
  Card.propTypes = {
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  return (
    <div className="card-container" onClick={onClick}>
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
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-3">{title}</h4>
            <p className="text-dark fs-5 fw-bold mb-0">₹ {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
