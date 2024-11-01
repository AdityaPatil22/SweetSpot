import PropTypes from 'prop-types';
import "./ProductFilters.css";

ProductFilters.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};

function ProductFilters({ activeTab, onTabChange }) {
  const categories = ['All Products', 'Cakes', 'Candies', 'Cookies', 'Bakery'];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-end">
          <ul className="nav nav-pills d-inline-flex text-center mb-5">
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <a
                  className={`d-flex m-2 py-2 rounded-pill nav-filters ${activeTab === category ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onTabChange(category);
                  }}
                  href="#"
                >
                  <span className="text-light" style={{ width: '130px' }}>{category}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductFilters;
