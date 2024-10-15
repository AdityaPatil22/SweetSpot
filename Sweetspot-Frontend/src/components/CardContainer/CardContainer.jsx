import Card from "../Card/Card";
import PropTypes from "prop-types";
import "./CardContainer.css";
import products from "../../utlis/ProductsData"; // Import product data

CardContainer.propTypes = {
  filter: PropTypes.string,
};

function CardContainer({ filter }) {
  const filteredProducts =
    filter !== "All Products"
      ? products.filter((product) => product.category === filter)
      : products;

  return (
    <div className="cards-container mb-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {filteredProducts.map((product, index) => (
              <div className="col" key={index}>
                <Card
                  imageUrl={product.imageUrl}
                  title={product.title}
                  description={product.description}
                  price={product.price}
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
