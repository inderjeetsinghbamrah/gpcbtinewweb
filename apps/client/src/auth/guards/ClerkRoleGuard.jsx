import {Navigate} from 'react-router-dom';
import {useUserContext} from '@/admin/lib/user-context.jsx';

export function ClerkRoleGuard({ allow, children }) {
    const { role, loading } = useUserContext();

    if (loading) return null;
    if (!allow.includes(role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}
