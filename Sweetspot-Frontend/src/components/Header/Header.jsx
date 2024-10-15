import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SweetSpotLogo from "../../assets/Images/SweetSpotLogo.png"
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const handleLogout = async() => {
    try{
      await axios.post('http://localhost:3000/api/logout', {}, {withCredentials: true});
      localStorage.removeItem("token");
      navigate("/login")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom sticky-top">
      <div className="container-fluid">
        <Link to="/"  >
          {/* <h1 className="display-6 sweet-heading">SweetSpot</h1> */}
          <img src={SweetSpotLogo} className="navbar-brand" alt='Logo'/>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/shop" className="nav-link" >Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/checkout" className="nav-link">Checkout</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-items" className="nav-link">Add Items</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/cart" className="nav-link-icons" style={{ marginRight: '1.5rem' }}>
                <i className="fas fa-cart-shopping" style={{ color: '#000000' }}></i>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link-icons dropdown-toggle" style={{ marginRight: '1.5rem' }}>
                    <i className="fas fa-user" style={{ color: '#000000' }}></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <Link to ="/signup" className="dropdown-item" >Sign Up</Link>
                <Link to ="/login" className="dropdown-item" >Login</Link>
                <div className="dropdown-divider"></div>
                <Link to ="/" className="dropdown-item" onClick={handleLogout}>Logout</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
