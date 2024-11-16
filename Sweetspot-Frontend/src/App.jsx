import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import AddItems from "./pages/AddItemsPage/AddItems";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import ProductPage from "./pages/ProductPage/ProductPage"
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import SuperAdminRoute from "./components/protectedRoute/superAdminRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "checkout",
    element: (
      <ProtectedRoute>
        <CheckoutPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "cart",
    element: (
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "payment",
    element: (
      <ProtectedRoute>
        <PaymentPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "add-items",
    element: (
      <SuperAdminRoute>
        <AddItems />
      </SuperAdminRoute>
    ),
  },
  {
    path: "orders",
    element: (
      <SuperAdminRoute>
        <OrdersPage />
      </SuperAdminRoute>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
