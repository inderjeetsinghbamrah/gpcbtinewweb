import {useEffect, useState} from "react";
import BookLoader from "./BookLoader.jsx";

const MIN_VISIBLE_TIME = 1000; // ms (600–1000 ideal)

export default function BufferedLoader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, MIN_VISIBLE_TIME);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return <BookLoader />;
}
