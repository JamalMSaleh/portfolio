import React, { lazy, Suspense } from 'react';

const LazyHeader = lazy(() => import('./HeaderComponent'));

const Header = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeader {...props} />
  </Suspense>
);

export default Header;
