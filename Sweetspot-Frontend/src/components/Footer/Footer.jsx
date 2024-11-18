import "./Footer.css";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start"
      style={{ backgroundColor: "#284b63" }}
    >
      <div className="container d-flex justify-content-center py-5">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2 rounded-circle"
        >
          <i className="fab fa-facebook-f"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2 rounded-circle"
        >
          <i className="fab fa-youtube"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2 rounded-circle"
        >
          <i className="fab fa-instagram"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2 rounded-circle"
        >
          <i className="fab fa-twitter"></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
