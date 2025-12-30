import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import api from "./api.js";

const UserContext = createContext(null);


export function UserProvider({ children }) {
    const { isSignedIn, getToken } = useAuth();
    const [state, setState] = useState({
        loading: true,
        role: null,
        instituteId: null,
        userId: null,
    });

    useEffect(() => {
        let mounted = true;

        async function loadUser() {
            if (!isSignedIn) {
                if (mounted) {
                    setState(prev => ({
                        ...prev,
                        loading: false,
                        role: null,
                        instituteId: null,
                        userId: null,
                    }));
                }
                return;
            }

            try {
                const token = await getToken();
                const res = await api.get("/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (mounted) {
                    setState(prev => ({
                        ...prev,
                        loading: false,
                        role: res.data.role,
                        instituteId: res.data.instituteId,
                        userId: res.data.id,
                    }));
                }
            } catch {
                if (mounted) {
                    setState(prev => ({
                        ...prev,
                        loading: false,
                        role: null,
                    }));
                }
            }
        }

        void loadUser();

        return () => {
            mounted = false;
        };
    }, [isSignedIn, getToken]);


    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error("useUserContext must be used inside UserProvider");
    return ctx;
}
