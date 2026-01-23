// src/app/router/lazy.jsx

import { Suspense } from "react";
import BufferedLoader from "@/public/ui/BufferedLoader";

export const lazyLoad = (Component) => (
    <Suspense fallback={<BufferedLoader />}>
        <Component />
    </Suspense>
);
