import { configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice"
import shippingReducer from "./slices/shippingSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    ship: shippingReducer
  },
});

export default store;
