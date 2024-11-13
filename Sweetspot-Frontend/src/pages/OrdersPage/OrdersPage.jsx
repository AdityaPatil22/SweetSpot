import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShippingDetails } from "../../store/slices/shippingSlice";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./OrdersPage.css";

function OrdersPage() {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.ship.shippingDetails || []);
  const loadingStatus = useSelector((state) => state.ship.status);

  useEffect(() => {
    if (loadingStatus === "idle") {
      dispatch(fetchShippingDetails());
    }
  }, [loadingStatus, dispatch]);

  return (
    <>
      <Header />
      <PageTitle title="Orders" />
      <div className="orders-main-container container-fluid col-lg-9">
        <table className="table table-styled">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Order ID</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Order Total</th>
              <th scope="col">Order Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((order, index) => (
              <tr key={order._id}>
                <th scope="row">{index + 1}</th>
                <td>{order._id}</td>
                <td>
                  {order.firstName} {order.lastName}
                </td>
                <td>{order.mobile}</td>
                <td>₹ {order.cartTotal}</td>
                <td>{new Date(order.orderDate).toLocaleDateString("en-CA")}</td>
                <td className="status status-completed">{order.orderStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default OrdersPage;
