import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
const Layout = lazy(() => import('../components/Layout'));
const Main = lazy(() => import('../pages/Main'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <p>에러</p>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Main />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
