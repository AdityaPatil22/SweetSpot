import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../store/slices/productSlice";
import Card from "../Card/Card";
import PropTypes from "prop-types";
import "./CardContainer.css";

CardContainer.propTypes = {
  filter: PropTypes.string,
};

function CardContainer({ filter }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items || []);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const filteredProducts =
    filter !== "All Products"
      ? products.filter((product) => product.productCategory === filter)
      : products;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProducts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const totalPages = Math.ceil(filteredProducts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="cards-container mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {currentPosts.map((product) => (
              <div className="col" key={product._id}>
                <Card
                  id={product._id}
                  imageUrl={product.productImage}
                  title={product.productName}
                  description={product.productDescription}
                  price={product.productPrice}
                  onClick={() => handleCardClick(product._id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        aria-label="Page navigation"
        className="container-fuild col-lg-12 d-flex justify-content-center mb-5"
      >
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardContainer;
