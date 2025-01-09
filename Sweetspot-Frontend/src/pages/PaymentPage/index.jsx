import PageTitle from "../../components/PageTitle/PageTitle";
import PaymentForm from "./PaymentForm";

function PaymentPage() {
  return (
    <div className="payment">
      <PageTitle title="Payment" />
      <PaymentForm />
    </div>
  );
}

export default PaymentPage;
