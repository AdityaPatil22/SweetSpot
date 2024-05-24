import { useState } from 'react';
import "./ProductFilters.css"

function ProductFilters() {
  const [activeTab, setActiveTab] = useState('tab-1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-end">
          <ul className="nav nav-pills d-inline-flex text-center mb-5">
            <li className="nav-item">
              <a
                className={`d-flex m-2 py-2 rounded-pill ${activeTab === 'tab-1' ? 'active' : ''} nav-filters`}
                onClick={() => handleTabChange('tab-1')}
                href="#tab-1"
              >
                <span className="text-light" style={{ width: '130px' }}>All Products</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`d-flex py-2 m-2 bg-light rounded-pill nav-filters ${activeTab === 'tab-2' ? 'active' : ''}`}
                onClick={() => handleTabChange('tab-2')}
                href="#tab-2"
              >
                <span className="text-dark" style={{ width: '130px' }}>Cakes</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`d-flex m-2 py-2 bg-light rounded-pill nav-filters ${activeTab === 'tab-3' ? 'active' : ''}`}
                onClick={() => handleTabChange('tab-3')}
                href="#tab-3"
              >
                <span className="text-dark" style={{ width: '130px' }}>Candies</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`d-flex m-2 py-2 bg-light rounded-pill nav-filters ${activeTab === 'tab-4' ? 'active' : ''}`}
                onClick={() => handleTabChange('tab-4')}
                href="#tab-4"
              >
                <span className="text-dark" style={{ width: '130px' }}>Cookies</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`d-flex m-2 py-2 bg-light rounded-pill nav-filters ${activeTab === 'tab-5' ? 'active' : ''}`}
                onClick={() => handleTabChange('tab-5')}
                href="#tab-5"
              >
                <span className="text-dark" style={{ width: '130px' }}>Bakery</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductFilters;
