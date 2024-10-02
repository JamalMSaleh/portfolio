import React, { FC } from 'react';
import styles from './Home.module.scss';
import dynamic from 'next/dynamic';


const Header = dynamic(() => import('app/components/Header'), {
    loading: () => <p>Loading header...</p>,
    ssr: false,
});
interface HomeProps {}

const Home: FC<HomeProps> = () => (
    <>
        <Header></Header>
  <div className={styles.Home} data-testid="Index">
    Index Component
  </div>
    </>
);

export default Home;
