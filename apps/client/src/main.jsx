import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "@/router";
import AppProviders from "@/providers/AppProviders.jsx";

import "./styles.css";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProviders>
            <RouterProvider router={router} />
        </AppProviders>
    </React.StrictMode>
);
