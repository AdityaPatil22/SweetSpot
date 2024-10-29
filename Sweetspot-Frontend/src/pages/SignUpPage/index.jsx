import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./style.css";

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [backendError, setBackendError] = useState("");

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
      await axios.post("http://localhost:3000/api/signup", formData);
      navigate("/login");
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

  return (
    <div className="signup-container">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-7 intro-section"></div>
          <div className="col-sm-6 col-md-5 form-section">
            <div className="login-wrapper">
              <h2 className="login-title">Sign Up</h2>
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
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-5">
                  <button
                    type="submit"
                    className="btn login-btn"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="login-wrapper-footer-text">
                Already have an account?{" "}
                <Link to="/login" className="text-reset">
                  Login here
                </Link>
              </p>
              {backendError && (
                <div className="alert alert-danger" role="alert">
                  {backendError}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
