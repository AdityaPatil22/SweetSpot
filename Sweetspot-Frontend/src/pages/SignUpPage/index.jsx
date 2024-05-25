import { useState } from 'react';
import Header from '../../components/Header/Header';
import "./style.css"; // Ensure your CSS styles are defined here
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required.';
    }

    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Signing up with', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='signup-container'>
      <Header/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-md-7 intro-section">
          <div className="intro-content-wrapper">
            {/* Additional content can go here */}
          </div>
        </div>
        <div className="col-sm-6 col-md-5 form-section">
          <div className="login-wrapper">
            <h2 className="login-title">Sign Up</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="sr-only">Name</label>
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
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
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
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password" className="sr-only">Password</label>
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
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <div className="d-flex justify-content-between align-items-center mb-5">
                <button type="submit" className="btn login-btn" disabled={Object.keys(errors).length > 0}>Sign Up</button>
              </div>
            </form>

            <p className="login-wrapper-footer-text">
              Already have an account? <Link to="/login" className="text-reset">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUpPage;
