import { Navigate, Outlet } from "react-router-dom";

function AuthGuard() {
  const access = localStorage.getItem("accessToken");
  const refresh = localStorage.getItem("refreshToken");
  const storedUser = localStorage.getItem("userData");
  if (!access || !refresh || !storedUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AuthGuard;
