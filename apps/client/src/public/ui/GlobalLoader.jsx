import { createContext, useContext, useState } from "react";

const LoaderContext = createContext(null);

export function LoaderProvider({ children }) {
    const [loading, setLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoaderContext.Provider>
    );
}

export function useLoader() {
    const ctx = useContext(LoaderContext);
    if (!ctx) {
        throw new Error("useLoader must be used inside LoaderProvider");
    }
    return ctx;
}
