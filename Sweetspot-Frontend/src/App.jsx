import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage/>
  },
  {
    path: "shop-page",
    element: <ShopPage />,
  },
  
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

