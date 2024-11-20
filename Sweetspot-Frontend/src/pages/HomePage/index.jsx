import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "./Banner";
import CounterSection from "./CounterSection";
import HomePageFront from "./HomePageFront";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <HomePageFront />
      <Banner />
      <CounterSection />
      <Footer />
    </div>
  );
}

export default HomePage;
