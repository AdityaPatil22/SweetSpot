import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProductFilters from "../HomePage/ProductFilters";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./style.css";

function ShopPage() {
  const [activeTab, setActiveTab] = useState("All Products");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="shop-page">
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
