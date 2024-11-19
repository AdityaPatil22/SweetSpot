import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./signup.css";

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [userCreatedAlert, setUserCreatedAlert] = useState();
  const [backendError, setBackendError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://sweetspot-p34g.onrender.com/api/signup",
        formData
      );
      setUserCreatedAlert("Account created! Please Login");
      setTimeout(() => {
        setUserCreatedAlert("");
        navigate("/login");
      }, 3000);
    } catch (error) {
      if (error.response) {
        setBackendError(error.response.data.message);
      } else {
        setBackendError("An unexpected error occurred");
      }
      setTimeout(() => {
        setBackendError("");
      }, 2000);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the password visibility
  };

  return (
    <div className="signup-container">
      <Header />
      <div className="signup-main-container">
        <div className="col-sm-6 col-md-12 signup-form-section">
          <div className="signup-wrapper">
            <h2 className="signup-title">Sign Up</h2>
            <form noValidate>
              <div className="form-group">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div
                  className="password-wrapper"
                  style={{ position: "relative" }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6"
                    style={{ paddingRight: "40px" }}
                  />
                  <i
                    className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                    onClick={handleShowPassword}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "#000000",
                    }}
                    title={showPassword ? "Hide password" : "Show password"}
                  ></i>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <button
                  type="submit"
                  className="btn signup-btn"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="signup-wrapper-footer-text">
              Already have an account?
              <Link to="/login" className="text-reset">
                Login here
              </Link>
            </p>
            {backendError && (
              <div className="alert alert-danger" role="alert">
                {backendError}
              </div>
            )}
            {userCreatedAlert && (
              <div className="alert alert-success mt-4" role="alert">
                {userCreatedAlert}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
