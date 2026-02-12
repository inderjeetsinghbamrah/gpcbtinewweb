import {lazy} from 'react';
import AdminLayout from '@/admin/layout/AdminLayout';
import {lazyLoad} from './lazy';
import {ClerkAuthGuard} from '@/auth/guards/ClerkAuthGuard';
import {ClerkRoleGuard} from '@/auth/guards/ClerkRoleGuard';

const Dashboard = lazy(() => import('@/admin/pages/Dashboard'));


export const adminRoutes = {
    path: '/admin',
    element: (
        <ClerkAuthGuard>
            <ClerkRoleGuard allow={["ADMIN"]}>
                <AdminLayout />
            </ClerkRoleGuard>
        </ClerkAuthGuard>
    ),
    children: [
        { index: true, element: lazyLoad(Dashboard) },
    ],
};