import { useContext } from "react";
import { AuthContext } from "../auth-provider/AuthProvider";
import Loading from "../../components/loading/Loading";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
