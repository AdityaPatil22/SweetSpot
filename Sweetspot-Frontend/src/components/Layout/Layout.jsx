import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;