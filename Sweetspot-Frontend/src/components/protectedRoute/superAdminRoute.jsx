import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsSuperAdmin } from "../../store/slices/authSlice";

function SuperAdminRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isSuperAdmin = useSelector(selectIsSuperAdmin)

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else if (!isSuperAdmin){
    return <Navigate to="/" replace />;
  }

  return children;
}

export default SuperAdminRoute;
