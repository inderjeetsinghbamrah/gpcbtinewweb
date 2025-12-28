import {Navigate} from "react-router-dom";

export default function RoleGuard({ allowed, children }) {
    const role = "ADMIN"; // replace with real state

    if (!allowed.includes(role)) {
        return <Navigate to="/403" replace />;
    }

    return children;
}
