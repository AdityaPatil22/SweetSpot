import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import "./CounterSection.css";

function CounterSection() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items || []);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsCount = products.length;

  return (
    <div className="container-fluid py-5 counter-container">
      <div className="container">
        <div className="bg-light p-5 rounded counter-back">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
                <i className="fa fa-users text-secondary"></i>
                <h4>satisfied customers</h4>
                <h1>100</h1>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
                <i className="fa fa-users text-secondary"></i>
                <h4>quality of service</h4>
                <h1>99%</h1>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5">
                <i className="fa fa-users text-secondary"></i>
                <h4>Available Products</h4>
                <h1>{productsCount}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;
