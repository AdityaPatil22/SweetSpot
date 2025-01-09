import PageTitle from "../../components/PageTitle/PageTitle";
import BillingDetails from "./BillingDetails";
import "./style.css";

function CheckoutPage() {
  return (
    <div className="checkout">
      <PageTitle title="Checkout" />
      <BillingDetails />
    </div>
  );
}

export default CheckoutPage;
