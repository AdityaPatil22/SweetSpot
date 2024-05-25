import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
          <h1 className="display-6 sweet-heading">SweetSpot</h1>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/shop-page" className="nav-link" >Shop</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Checkout</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Store</a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link-icons" style={{ marginRight: '1.5rem' }}>
                <i className="fas fa-cart-shopping" style={{ color: '#000000' }}></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link-icons dropdown-toggle" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{ marginRight: '1.5rem' }}>
                <b>
                  <i className="fas fa-user" style={{ color: '#000000' }}></i>
                </b>
              </a>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <Link to ="/signup" className="dropdown-item" >Sign Up</Link>
                <Link to ="/login" className="dropdown-item" >Login</Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" >Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
