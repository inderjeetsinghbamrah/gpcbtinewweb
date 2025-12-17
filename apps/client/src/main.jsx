import React, {lazy, Suspense} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./ui/RootLayout.jsx";
import BufferedLoader from "./ui/BufferedLoader.jsx";
import "./styles.css";
import {LoaderProvider} from "./ui/GlobalLoader.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = lazy(() => import("./pages/Home.jsx"));
const CoursesPage = lazy(() => import("./pages/CoursesPage.jsx"));
const EventsPage = lazy(() => import("./pages/EventsPage.jsx"));
const EventDetail = lazy(() => import("./pages/EventDetail.jsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<BufferedLoader />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "courses",
                element: (
                    <Suspense fallback={<BufferedLoader />}>
                        <CoursesPage />
                    </Suspense>
                ),
            },
            {
                path: "events",
                element: (
                    <Suspense fallback={<BufferedLoader />}>
                        <EventsPage />
                    </Suspense>
                ),
            },
            {
                path: "events/:id",
                element: (
                    <Suspense fallback={<BufferedLoader />}>
                        <EventDetail />
                    </Suspense>
                ),
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(

    <React.StrictMode>
        <LoaderProvider>
            <RouterProvider router={router} />
        </LoaderProvider>
    </React.StrictMode>
);
