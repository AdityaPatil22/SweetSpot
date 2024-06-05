
import PropTypes from "prop-types";
import "./Card.css";



function Card({ imageUrl, title, description, price }) {
  Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };

  
  return (
    <div className="card-container">
      <div className="rounded position-relative  card-layout">
        <div className="sweet-img">
          <img
            src={imageUrl}
            className="img-fluid w-100 rounded-top"
            alt=""
          />
        </div>
        <div className="text-white px-3 py-2 rounded position-absolute sweet-head-text">
          {title}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4 className="mb-3">{title}</h4>
          <p className="mb-4">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-dark fs-5 fw-bold mb-0">{price}</p>
            <button  className="btn btn-primary rounded-pill px-3 cart-pill">
              <i className="fa fa-shopping-bag me-2"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
