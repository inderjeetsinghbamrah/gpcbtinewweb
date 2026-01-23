// src/app/providers/AppProviders.jsx

import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@/providers/theme-provider";
import { LoaderProvider } from "@/public/ui/GlobalLoader";

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

export default function AppProviders({ children }) {
    return (
        <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
            <ThemeProvider defaultTheme="light">
                <QueryClientProvider client={queryClient}>
                    <LoaderProvider>
                        {children}
                    </LoaderProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </ClerkProvider>
    );
}
