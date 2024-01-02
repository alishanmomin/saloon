import { Navigate, Outlet } from "react-router-dom";

function AdminPrivate({ token }) {
    return token ? <Outlet /> : <Navigate to="/login" />;
}
  

export default AdminPrivate;
