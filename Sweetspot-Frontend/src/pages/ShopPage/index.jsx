import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProductFilters from "../HomePage/ProductFilters";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./style.css";

function ShopPage() {
  const [activeTab, setActiveTab] = useState("All Products");
  const dispatch = useDispatch();

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="shop">
      <Header />
      <PageTitle title="Shop" />
      <ProductFilters activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="mb-5">
        <CardContainer filter={activeTab} />
      </div>
      <Footer />
    </div>
  );
}

export default ShopPage;
