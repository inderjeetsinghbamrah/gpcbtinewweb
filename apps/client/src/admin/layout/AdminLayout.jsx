import {Outlet} from 'react-router-dom';
import {ClerkAuthGuard} from '@/auth/guards/ClerkAuthGuard.jsx';
import {ClerkRoleGuard} from '@/auth/guards/ClerkRoleGuard.jsx';
import {ACCESS} from '@/admin/lib/access-policy.js';
import {ThemeToggle} from '@/admin/admin-components/theme-toggle';

export default function AdminLayout() {
    return (
        <ClerkAuthGuard>
            <ClerkRoleGuard allow={ACCESS.ADMIN_AREA}>
                <div className="min-h-screen flex bg-background">

                    <aside className="w-64 border-r hidden md:flex">
                        <div className="p-6 font-semibold">EDUOBAL Admin</div>
                    </aside>

                    <div className="flex-1 flex flex-col">
                        <header className="h-16 border-b px-6 flex items-center justify-between">
                            <span>Admin Panel</span>
                            <ThemeToggle />
                        </header>

                        <main className="flex-1 p-6">
                            <Outlet />
                        </main>
                    </div>

                </div>
            </ClerkRoleGuard>
        </ClerkAuthGuard>
    );
}
