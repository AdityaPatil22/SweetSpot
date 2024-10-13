import {Link} from "react-router-dom"
import "./Banner.css"

function Banner() {
    const redirectToShop = () => {
      // Implement your redirection logic for Shop
    };
  
    return (
      <div className="container-fluid banner banner-ed banner-container">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="py-4">
                <h1 className="display-3" style={{ color: '#ffc300' }}>Freshly baked cakes</h1>
                <p className="fw-normal display-3 text-light mb-4">in Our Store</p>
                <p className="mb-4 text-light">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                <Link to="/shop"><a className="banner-btn btn border-2 rounded-pill text-light py-3 px-5" onClick={redirectToShop}>BUY</a></Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative ">
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid w-100 rounded" alt="" />
                <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style={{ width: '140px', height: '140px', top: '5%', left: '5%' }}>
                  <h1 style={{ fontSize: '100px' }}>1</h1>
                  <div className="d-flex flex-column">
                    <span className="h2 mb-0">₹450</span>
                    <span className="h4 text-muted mb-0">kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Banner;
  