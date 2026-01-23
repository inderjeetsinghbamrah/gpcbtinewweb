// src/app/router/admin.routes.jsx

import { lazy } from "react";
import AdminLayout from "@/admin/layout/AdminLayout";
import { lazyLoad } from "./lazy";

const Dashboard = lazy(() => import("@/admin/pages/Dashboard"));

export const adminRoutes = {
    path: "/admin",
    element: <AdminLayout />, // guard inside layout
    children: [
        {
            index: true,
            element: lazyLoad(Dashboard),
        },
    ],
};
