import React, { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "@/public/ui/public-components/Header/Header.jsx";
import Footer from "../ui/public-components/Footer.jsx";
import { useLoader } from "../ui/GlobalLoader.jsx";
import { useInstitute } from "../hooks/useInstitute.js";

export default function PublicLayout() {
    const navigation = useNavigation();
    const { setVisible } = useLoader();

    // ✅ Fetch ONCE at layout level
    const instituteQuery = useInstitute();

    useEffect(() => {
        if (navigation.state === "loading") {
            setVisible(true);
        } else {
            const t = setTimeout(() => setVisible(false), 800);
            return () => clearTimeout(t);
        }
    }, [navigation.state, setVisible]);

    return (
        <div className="min-h-screen flex flex-col font-roboto">
            {/* Pass instituteQuery down */}
            <Header instituteQuery={instituteQuery} />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer instituteQuery={instituteQuery} />
        </div>
    );
}
