import React, { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./Index'));

const Home = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHome {...props} />
  </Suspense>
);

export default Home;
