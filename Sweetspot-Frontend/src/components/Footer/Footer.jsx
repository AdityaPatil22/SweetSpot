import SweetSpotLogo from "../../assets/Images/SweetSpotLogo.png";
import './Footer.css';

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white-50">
      <div className="container py-3">
        <div className="row ">
        <div className="col-lg-12 col-md-5 d-flex justify-content-center">
          <img src={SweetSpotLogo} className="footer-logo"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
