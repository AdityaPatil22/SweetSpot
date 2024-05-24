import './Header.css';

function Header() {
  const redirectToHome = () => {
    // Implement your redirection logic for Home
  };

  const redirectToShop = () => {
    // Implement your redirection logic for Shop
  };

  const redirectToCheckout = () => {
    // Implement your redirection logic for Checkout
  };

  const redirectToTrackOrder = () => {
    // Implement your redirection logic for Track Order
  };

  const redirectToStoreMain = () => {
    // Implement your redirection logic for Store
  };

  const redirectToCart = () => {
    // Implement your redirection logic for Cart
  };

  const redirectToSignup = () => {
    // Implement your redirection logic for Signup
  };

  const redirectToLogin = () => {
    // Implement your redirection logic for Login
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={redirectToHome}>
          <h1 className="display-6 sweet-heading">SweetSpot</h1>
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" onClick={redirectToShop}>Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={redirectToCheckout}>Checkout</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={redirectToTrackOrder}>Track Your Order</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={redirectToStoreMain}>Store</a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link-icons" onClick={redirectToCart} style={{ marginRight: '1.5rem' }}>
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
                <a className="dropdown-item" onClick={redirectToSignup}>Sign Up</a>
                <a className="dropdown-item" onClick={redirectToLogin}>Login</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" onClick={redirectToHome}>Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
