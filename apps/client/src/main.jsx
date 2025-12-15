import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';
import RootLayout from './ui/RootLayout.jsx';
import Home from './pages/Home.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import EventDetail from './pages/EventDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <CoursesPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'events/:id', element: <EventDetail /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
