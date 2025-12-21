import React, {useEffect} from 'react';
import {Outlet, useNavigation} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer.jsx';
import {useLoader} from "./GlobalLoader.jsx";

export default function RootLayout() {
    const navigation = useNavigation();
    const { setVisible } = useLoader();

    useEffect(() => {
        if (navigation.state === "loading") {
            setVisible(true);
        } else {
            const t = setTimeout(() => setVisible(false), 800);
            return () => clearTimeout(t);
        }
    }, [navigation.state, setVisible]);

    return (
        <>
            <div className="min-h-screen flex flex-col font-roboto">
                <Header />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}
