import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

export default function AuthGuard({ children }) {
    const { isSignedIn, isLoaded } = useAuth();

    if (!isLoaded) return null;
    if (!isSignedIn) return <Navigate to="/login" replace />;

    return children;
}
