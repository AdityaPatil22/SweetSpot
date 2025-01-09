import Banner from "./Banner";
import CounterSection from "./CounterSection";
import HomePageFront from "./HomePageFront";

function HomePage() {
  return (
    <div className="home-page">
      <HomePageFront />
      <Banner />
      <CounterSection />
    </div>
  );
}

export default HomePage;
