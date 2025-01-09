import PageTitle from "../../components/PageTitle/PageTitle";
import AddItemsForm from "./AddItemsForm";

function AddItems() {
  return (
    <div className="add-items-container">
      <PageTitle title="Add Items" />
      <AddItemsForm />
    </div>
  );
}

export default AddItems;
