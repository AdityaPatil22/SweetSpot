import "./Footer.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="container d-flex justify-content-center py-5">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2 footer-btn"
        >
          <i className="fa-brands fa-square-facebook"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2 footer-btn"
        >
          <i className="fa-brands fa-square-instagram"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2 footer-btn"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
