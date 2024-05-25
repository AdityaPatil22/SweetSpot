import CardContainer from "../../components/CardContainer/CardContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./style.css";

function ShopPage() {
  return (
    <div className="shop-page">
      <Header />
      <PageTitle title="Shop" />
      <div className="mb-5 mt-5">
        <CardContainer />
      </div>
      <Footer />
    </div>
  );
}

export default ShopPage;
