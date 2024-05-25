import CardContainer from "../../components/CardContainer/CardContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "./Banner";
import CounterSection from "./CounterSection";
import HomePageFront from "./HomePageFront";
import ProductFilters from "./ProductFilters";
import "./style.css";

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <HomePageFront />
      <ProductFilters />
      <CardContainer/>
      <Banner />
      <CounterSection />
      <Footer />
    </div>
  );
}

export default HomePage;
