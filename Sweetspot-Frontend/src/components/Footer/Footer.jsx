import './Footer.css';

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-3">
      <div className="pb-6" style={{ borderBottom: '1px solid #ffc300' }}></div>
      <div className="container py-3">
        <div className="row g-3">
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-2">Shop Info</h4>
              <a className="btn-link footer-text" href="">About Us</a>
              <a className="btn-link footer-text" href="">Contact Us</a>
              <a className="btn-link footer-text" href="">Privacy Policy</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-2">Account</h4>
              <a className="btn-link footer-text" href="">My Account</a>
              <a className="btn-link footer-text" href="">Shopping Cart</a>
              <a className="btn-link footer-text" href="">Order History</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-2">Contact</h4>
              <p>Address: </p>
              <p>Email: </p>
              <p>Phone: </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-5">
            <div className="d-flex justify-content-end pt-2">
              <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
