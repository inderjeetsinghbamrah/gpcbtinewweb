import {createContext, useContext, useState} from "react";
import BookLoader from "./BookLoader.jsx";

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
    const [visible, setVisible] = useState(false);

    return (
        <LoaderContext.Provider value={{ visible, setVisible }}>
            {visible && <BookLoader />}
            {children}
        </LoaderContext.Provider>
    );
}

export const useLoader = () => useContext(LoaderContext);
