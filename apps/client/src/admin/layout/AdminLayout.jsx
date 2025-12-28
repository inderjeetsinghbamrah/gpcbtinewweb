import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar / Header */}
            <aside className="w-64 border-r">
                Admin Sidebar
            </aside>

            {/* THIS IS REQUIRED */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
}
