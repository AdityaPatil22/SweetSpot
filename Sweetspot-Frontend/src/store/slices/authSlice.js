import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const role = localStorage.getItem("role") || "user"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: !!token,
    token: token || null,
    role: role,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
      state.role = action.payload.role || "user"
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", state.role);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.token = "user"
      localStorage.removeItem("token");
      localStorage.removeItem("role")
    },
  },
});

export const selectIsSuperAdmin = (state) => state.auth.role === "admin";
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
