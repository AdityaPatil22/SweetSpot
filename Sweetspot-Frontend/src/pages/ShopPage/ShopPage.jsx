import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import CardContainer from "../../components/CardContainer/CardContainer";

function ShopPage() {
  const [activeTab, setActiveTab] = useState("All Products");
  const dispatch = useDispatch();

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <PageTitle title="Shop" />
      <ProductFilters activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="mb-5">
        <CardContainer filter={activeTab} />
      </div>
    </>
  );
}

export default ShopPage;
