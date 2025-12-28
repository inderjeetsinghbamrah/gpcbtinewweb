import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PublicLayout from "./public/layout/PublicLayout.jsx";
import BufferedLoader from "./public/ui/BufferedLoader.jsx";
import "./styles.css";
import { LoaderProvider } from "./public/ui/GlobalLoader.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "./admin/layout/AdminLayout.jsx";
import AuthGuard from "./guards/AuthGuard.jsx";
import RoleGuard from "./guards/RoleGuard.jsx";
import {AdminDashboard} from "./admin/Dashboard.jsx";

const Home = lazy(() => import("./public/pages/Home.jsx"));
const CoursesPage = lazy(() => import("./public/pages/CoursesPage.jsx"));
const EventsPage = lazy(() => import("./public/pages/EventsPage.jsx"));
const EventDetail = lazy(() => import("./public/pages/EventDetail.jsx"));

/* ---------------- React Query Client ---------------- */

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10 * 60 * 1000,        // 10 minutes
            cacheTime: 30 * 60 * 1000,        // 30 minutes
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

/* ---------------- Router ---------------- */

const router = createBrowserRouter(
    [
        /* ================= PUBLIC ================= */
        {
            path: "/",
            element: <PublicLayout />,
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

        /* ================= ADMIN ================= */
        {
            path: "/admin",
            element: (
                <AuthGuard>
                    <RoleGuard allowed={["ADMIN"]}>
                        <AdminLayout />
                    </RoleGuard>
                </AuthGuard>
            ),
            children: [
                {
                    index: true,
                    element: (
                        <Suspense fallback={<BufferedLoader />}>
                            <AdminDashboard />
                        </Suspense>
                    ),
                },
            ],
        },
    ],
    {
        future: {
            v7_startTransition: true,
        },
    }
);



/* ---------------- Render ---------------- */

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <LoaderProvider>
                <RouterProvider router={router} />
            </LoaderProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
