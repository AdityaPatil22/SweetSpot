import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { selectCartItems , clearCart } from "../../store/slices/cartSlice";

import axios from "axios";
import SweetSpotLogo from "../../assets/Images/SweetSpotLogo.png";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const totalQuantity = cartItems.length;

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://sweetspot-p34g.onrender.com/api/logout",
        {},
        { withCredentials: true }
      );
      dispatch(logout());
      dispatch(clearCart())
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom sticky-top">
      <div className="container-fluid">
        <Link to="/">
          <img src={SweetSpotLogo} className="navbar-brand" alt="Logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <Link to="/add-items" className="nav-link">
                  Add Items
                </Link>
              ) : (
                <></>
              )}
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <Link to="/orders" className="nav-link">
                  Orders
                </Link>
              ) : (
                <></>
              )}
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link-icons"
                style={{ marginRight: "1.5rem" }}
              >
                <i
                  className="fas fa-cart-shopping"
                  style={{ color: "#000000" }}
                ></i>
                <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.7rem"}}>
                  {totalQuantity}
                </span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link-icons dropdown-toggle"
                style={{ marginRight: "1.5rem" }}
              >
                <i className="fas fa-user" style={{ color: "#000000" }}></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/"
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/signup" className="dropdown-item">
                      Sign Up
                    </Link>
                    <Link to="/login" className="dropdown-item">
                      Login
                    </Link>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
