import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/clerk-react";

import PublicLayout from "./public/layout/PublicLayout.jsx";
import BufferedLoader from "./public/ui/BufferedLoader.jsx";
import { LoaderProvider } from "./public/ui/GlobalLoader.jsx";
import AdminLayout from "./admin/layout/AdminLayout.jsx";
import { ThemeProvider } from "@/providers/theme-provider";

import "./styles.css";

/* ---------- Lazy pages ---------- */

const Home = React.lazy(() => import("./public/pages/Home.jsx"));
const CoursesPage = React.lazy(() => import("./public/pages/CoursesPage.jsx"));
const EventsPage = React.lazy(() => import("./public/pages/EventsPage.jsx"));
const EventDetail = React.lazy(() => import("./public/pages/EventDetail.jsx"));
const AdminDashboard = React.lazy(() => import("./admin/pages/Dashboard.jsx"))
const Login = React.lazy(() => import("./admin/auth/Login.jsx"));

/* ---------- React Query ---------- */

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10 * 60 * 1000,
            cacheTime: 30 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

/* ---------- Router ---------- */

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: (
                    <React.Suspense fallback={<BufferedLoader />}>
                        <Home />
                    </React.Suspense>
                ),
            },
            {
                path: "courses",
                element: (
                    <React.Suspense fallback={<BufferedLoader />}>
                        <CoursesPage />
                    </React.Suspense>
                ),
            },
            {
                path: "events",
                element: (
                    <React.Suspense fallback={<BufferedLoader />}>
                        <EventsPage />
                    </React.Suspense>
                ),
            },
            {
                path: "events/:id",
                element: (
                    <React.Suspense fallback={<BufferedLoader />}>
                        <EventDetail />
                    </React.Suspense>
                ),
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />, // guards live inside layout
        children: [
            {
                index: true,
                element: (
                    <React.Suspense fallback={<BufferedLoader />}>
                        <AdminDashboard />
                    </React.Suspense>
                ),
            },
        ],
    },
    {
        path: "/login",
        element: (
            <React.Suspense fallback={<BufferedLoader />}>
                <Login />
            </React.Suspense>
        ),
    },
]);

/* ---------- Render ---------- */

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
            <ThemeProvider defaultTheme="light">
                <QueryClientProvider client={queryClient}>
                    <LoaderProvider>
                        <RouterProvider router={router} />
                    </LoaderProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </ClerkProvider>
    </React.StrictMode>
);