import PropTypes from "prop-types";
import "./ProductFilters.css";

ProductFilters.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

function ProductFilters({ activeTab, onTabChange }) {
  const categories = ["All Products", "Cakes", "Candies", "Cookies", "Bakery"];

  return (
    <div className="container-fluid col-9 px-3 py-5">
      <div className="d-flex align-items-center justify-content-between">
        <div className="input-group search-container">
          <input
            type="search"
            className="form-control rounded-pill"
            placeholder="Search product"
            aria-label="Search product"
            aria-describedby="basic-addon2"
          />
        </div>
        <div>
          <ul className="nav nav-pills d-inline-flex">
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <button
                  className={`d-flex m-2 py-2 border-0 rounded-pill nav-filters ${
                    activeTab === category ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    onTabChange(category);
                  }}
                >
                  <span className="text-light" style={{ width: "130px" }}>
                    {category}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductFilters;
