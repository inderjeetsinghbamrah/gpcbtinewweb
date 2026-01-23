// src/app/router/public.routes.jsx

import { lazy } from "react";
import PublicLayout from "@/public/layout/PublicLayout";
import { lazyLoad } from "./lazy";

const Home = lazy(() => import("@/public/pages/Home"));
const CoursesPage = lazy(() => import("@/public/pages/CoursesPage"));
const EventsPage = lazy(() => import("@/public/pages/EventsPage"));
const EventDetail = lazy(() => import("@/public/pages/EventDetail"));

export const publicRoutes = {
    path: "/",
    element: <PublicLayout />,
    children: [
        { index: true, element: lazyLoad(Home) },
        { path: "courses", element: lazyLoad(CoursesPage) },
        { path: "events", element: lazyLoad(EventsPage) },
        { path: "events/:id", element: lazyLoad(EventDetail) },
    ],
};
