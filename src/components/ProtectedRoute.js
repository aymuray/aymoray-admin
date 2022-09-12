import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Sidebar } from "./Sidebar/Sidebar";

function ProtectedRoute({children}) {
    const { user, loading } = useAuth();
    if (!loading && !user) return <Navigate to="/login" />;
    return <div><Sidebar></Sidebar>
    {children}</div>;
}

export default ProtectedRoute