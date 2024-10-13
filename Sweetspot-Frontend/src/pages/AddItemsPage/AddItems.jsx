import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import AddItemsForm from "./AddItemsForm";
import "./AddItems.css";

function AddItems() {
  return (
    <div className="add-items-container">
      <Header />
      <PageTitle title="Add Items" />
      <AddItemsForm/>
      <Footer />
    </div>
  );
}

export default AddItems;
