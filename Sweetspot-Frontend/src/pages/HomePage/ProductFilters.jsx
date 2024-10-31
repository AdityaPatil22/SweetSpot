
import PropTypes from 'prop-types';
import "./ProductFilters.css";

ProductFilters.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};

function ProductFilters({ activeTab, onTabChange }) {

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-end">
          <ul className="nav nav-pills d-inline-flex text-center mb-5">
          <li className="nav-item">
              <a
                className={`d-flex m-2 py-2 rounded-pill nav-filters ${activeTab === 'All Products' ? 'active' : ''}`}
                onClick={() => onTabChange('All Products')}
                href="#tab-1"
              >
                <span className="text-light" style={{ width: '130px' }}>All Products</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`d-flex m-2 py-2 rounded-pill nav-filters ${activeTab === 'Cakes' ? 'active' : ''}`}
                onClick={() => onTabChange('Cakes')}
                href="#tab-2"
              >
                <span className="text-light" style={{ width: '130px' }}>Cakes</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`d-flex m-2 py-2 rounded-pill nav-filters ${activeTab === 'Candies' ? 'active' : ''}`}
                onClick={() => onTabChange('Candies')}
                href="#tab-3"
              >
                <span className="text-light" style={{ width: '130px' }}>Candies</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`d-flex m-2 py-2 rounded-pill nav-filters ${activeTab === 'Cookies' ? 'active' : ''}`}
                onClick={() => onTabChange('Cookies')}
                href="#tab-4"
              >
                <span className="text-light" style={{ width: '130px' }}>Cookies</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`d-flex m-2 py-2 rounded-pill nav-filters ${activeTab === 'Bakery' ? 'active' : ''}`}
                onClick={() => onTabChange('Bakery')}
                href="#tab-5"
              >
                <span className="text-light" style={{ width: '130px' }}>Bakery</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductFilters;
