import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import AddItems from "./pages/AddItemsPage/AddItems";

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
    path: "checkout",
    element: <CheckoutPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "payment",
    element: <PaymentPage />,
  },
  {
    path: "add-items",
    element: <AddItems />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
