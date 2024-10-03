import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';


const Header = dynamic(() => import('app/components/Header'), {
    loading: () => <p>Loading header...</p>,
    ssr: false,
});
const Footer = dynamic(() => import('app/components/Footer'), {
    loading: () => <p>Loading footer...</p>,
    ssr: false,
});
// Corrected MyApp function definition
const myApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
};

export default myApp;