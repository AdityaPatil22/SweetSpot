import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./ProductPage.css";

function ProductPage() {
  const [addItem, setAddItem] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products.items || []);
  const product = products.find((item) => item._id === id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        imageUrl: product.productImage,
        title: product.productName,
        description: product.productDescription,
        price: product.productPrice,
        quantity: 1,
      })
    );
    setAddItem("Item Added to cart");
    setTimeout(() => {
      setAddItem("");
    }, 1000);
  };
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <PageTitle title={product.productCategory} />
      <section className="py-5">
        <div className="container-fluid  col-8">
          <div className="row gx-5">
            <aside className="col-lg-5">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <img
                  className="rounded-4 fit image-container"
                  src={product.productImage}
                  alt={product.productName}
                />
              </div>
            </aside>
            <main className="col-lg-5">
              <div className="ps-lg-3">
                <p className="title text-dark h1">{product.productName}</p>
                <div className="mb-3 mt-4">
                  <span className="h4">Price :</span>
                  <span className="h4"> ₹{product.productPrice}</span>
                </div>

                <p className="product-description">
                  {product.productDescription}
                </p>

                <hr />

                <button
                  className="btn btn-primary shadow-0"
                  onClick={handleAddToCart}
                >
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                </button>
                {addItem && (
                  <div className="alert alert-success mt-4" role="alert">
                    {addItem}
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
