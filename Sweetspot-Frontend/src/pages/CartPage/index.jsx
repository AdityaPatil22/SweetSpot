import PageTitle from "../../components/PageTitle/PageTitle";
import Cart from "./Cart";

function CartPage() {
  return (
    <div className="cart">
      <PageTitle title="Cart" />
      <Cart />
    </div>
  );
}

export default CartPage;
