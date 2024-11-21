import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
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
      <Suspense fallback={<Spinner />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <Spinner />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: 'brand-movie/:id',
        element: (
          <Suspense fallback={<Spinner />}>
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
        path: 'new-media',
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
