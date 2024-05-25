import { useState } from 'react';
import Header from '../../components/Header/Header';
import './style.css'; 
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Logging in with', { email, password });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='login-container'>
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
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <div className="d-flex justify-content-between align-items-center mb-5">
                <button type="submit" className="btn login-btn" disabled={Object.keys(errors).length > 0}>Login</button>
                <a href="#!" className="forgot-password-link">Forgot Password?</a>
              </div>
            </form>

            <p className="login-wrapper-footer-text">
              Need an account? <Link to="/signup" className="text-reset">Signup here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default LoginPage;
