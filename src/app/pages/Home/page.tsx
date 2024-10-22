import React, { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./HomePage'));

const Home = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={"... Home Page Loading"}>
    <LazyHome {...props} />
  </Suspense>
);

export default Home;
