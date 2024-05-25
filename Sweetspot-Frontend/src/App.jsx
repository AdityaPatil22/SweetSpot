import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";

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
    element: <SignUpPage/>
  },
  {
    path: "shop-page",
    element: <ShopPage />,
  },
  {
    path: "checkout-page",
    element: <CheckoutPage/>,
  },
  {
    path: "cart-page",
    element: <CartPage/>,
  },
  {
    path: "payment-page",
    element: <PaymentPage/>,
  },
  
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}


