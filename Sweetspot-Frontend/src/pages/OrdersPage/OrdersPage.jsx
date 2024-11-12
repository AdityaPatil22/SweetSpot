import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./OrdersPage.css";

function OrdersPage() {
  return (
    <>
      <Header />
      <PageTitle title="Orders" />
      <div className="orders-main-container container-fluid col-lg-8">
        <table className="table table-styled">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Order ID</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Mobile</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>$120</td>
              <td>123-456-7890</td>
              <td className="status status-completed">Completed</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>$85</td>
              <td>098-765-4321</td>
              <td className="status status-pending">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default OrdersPage;
