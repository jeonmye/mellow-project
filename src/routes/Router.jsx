import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import LoadingSpinner from '../components/LoadingSpinner';
const Layout = lazy(() => import('../components/Layout'));
const Main = lazy(() => import('../pages/Main'));
const BrandMovie = lazy(() => import('../pages/BrandMovie'));
const Character = lazy(() => import('../pages/Character'));
const NewMedia = lazy(() => import('../pages/NewMedia'));
const BrandDesign = lazy(() => import('../pages/BrandDesign'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<p>에러</p>}>
        <Layout />
      </Suspense>
    ),
    errorElement: <p>에러</p>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>에러</p>}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: 'brand-movie',
        element: (
          <Suspense fallback={<p>에러</p>}>
            <BrandMovie />
          </Suspense>
        ),
      },
      {
        path: 'character',
        element: (
          <Suspense fallback={<p>에러</p>}>
            <Character />
          </Suspense>
        ),
      },
      {
        path: 'new-medi',
        element: (
          <Suspense fallback={<p>에러</p>}>
            <NewMedia />
          </Suspense>
        ),
      },
      {
        path: 'brand-design',
        element: (
          <Suspense fallback={<p>에러</p>}>
            <BrandDesign />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
