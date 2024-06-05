import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "./Banner";
import CounterSection from "./CounterSection";
import HomePageFront from "./HomePageFront";
import ProductFilters from "./ProductFilters";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./style.css";

function HomePage() {
  const [activeTab, setActiveTab] = useState("All Products");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="HomePage">
      <Header />
      <HomePageFront />
      <ProductFilters activeTab={activeTab} onTabChange={handleTabChange} />
      <CardContainer filter={activeTab} />
      <Banner />
      <CounterSection />
      <Footer />
    </div>
  );
}

export default HomePage;
