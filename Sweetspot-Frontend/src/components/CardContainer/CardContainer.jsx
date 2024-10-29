import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import Card from "../Card/Card";
import PropTypes from "prop-types";
import "./CardContainer.css";

CardContainer.propTypes = {
  filter: PropTypes.string,
};

function CardContainer({ filter }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items || []);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === "loading") {
    return <p>Loading...</p>;
  } else if (productStatus === "failed") {
    return <p>Error loading products</p>;
  }

  const filteredProducts =
    filter !== "All Products"
      ? products.filter((product) => product.category === filter)
      : products;

  return (
    <div className="cards-container mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {filteredProducts.map((product) => (
              <div className="col" key={product.id}>
                <Card
                  imageUrl={product.productImage}
                  title={product.productName}
                  description={product.productDescription}
                  price={product.productPrice} // Changed from product.price
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
