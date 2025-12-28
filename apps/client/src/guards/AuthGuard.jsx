import {Navigate} from "react-router-dom";

export default function AuthGuard({ children }) {
    const isAuthenticated = true; // replace with real logic

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}
