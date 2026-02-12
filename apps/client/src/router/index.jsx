import {createBrowserRouter} from 'react-router-dom';

import {publicRoutes} from './public.routes';
import {adminRoutes} from './admin.routes';
import LoginPage from '@/auth/pages/LoginPage.jsx';

export const router = createBrowserRouter(
    [
      {
        path: '/login',
        element: <LoginPage />,
      },
        publicRoutes,
        adminRoutes,
    ],
    {
        future: {
            v7_startTransition: true,
        },
    }
);
