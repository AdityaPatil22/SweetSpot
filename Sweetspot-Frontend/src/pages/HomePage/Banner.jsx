import { Link } from "react-router-dom";
import BannerImage from "../../assets/Images/banner-image.jpg"
import "./Banner.css";

function Banner() {
  return (
    <div className="container-fluid col-lg-12 banner-container">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="display-4 header-text">
                Freshly baked cakes
              </h1>
              <p className="fw-normal display-4 text-dark mb-4">in Our Store</p>
              <p className="mb-4 text-dark">
                Discover a world of delightful, freshly baked cakes crafted
                with love and premium ingredients. Each cake is a treat for your
                taste buds, whether you are looking for a sweet indulgence or
                the perfect centerpiece for your celebrations.
              </p>
              <Link to="/shop">
                <a className="banner-btn btn border-2 rounded-pill text-light py-3 px-5">
                  BUY
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative ">
              <img
                src="https://images.unsplash.com/photo-1621868402792-a5c9fa6866a3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded banner-image"
                alt="Banner image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
