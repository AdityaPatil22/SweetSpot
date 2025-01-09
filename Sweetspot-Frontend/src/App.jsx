import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import LoginPage from "./pages/LoginPage/Login";
import SignUpPage from "./pages/SignUpPage/Signup";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import AddItems from "./pages/AddItemsPage/AddItems";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import SuperAdminRoute from "./components/protectedRoute/superAdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "login",
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
  },
  {
    path: "signup",
    element: (
      <Layout>
        <SignUpPage />
      </Layout>
    ),
  },
  {
    path: "shop",
    element: (
      <Layout>
        <ShopPage />
      </Layout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <Layout>
        <ProductPage />
      </Layout>
    ),
  },
  {
    path: "checkout",
    element: (
      <ProtectedRoute>
        <Layout>
          <CheckoutPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "cart",
    element: (
      <ProtectedRoute>
        <Layout>
          <CartPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "payment",
    element: (
      <ProtectedRoute>
        <Layout>
          <PaymentPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "add-items",
    element: (
      <SuperAdminRoute>
        <Layout>
          <AddItems />
        </Layout>
      </SuperAdminRoute>
    ),
  },
  {
    path: "orders",
    element: (
      <SuperAdminRoute>
        <Layout>
          <OrdersPage />
        </Layout>
      </SuperAdminRoute>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
