import { Navigate, Outlet } from 'react-router-dom';
import { PRIVATE, HOME } from '../../config/routes/paths';
import { useAuthContext } from '../../context/authContext';

export  function PublicRoute() {
    const {isAuthenticated} = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={PRIVATE} />;
    }

    return (
        <div>
        <Outlet />
        </div>
    );
}