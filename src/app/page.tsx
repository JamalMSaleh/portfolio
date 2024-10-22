import type { AppProps } from 'next/app';


// Corrected MyApp function definition
const myApp = ({  }: AppProps) => {
    return (
        <div className="min-h-screen flex flex-col">
           antialiased
        </div>
    );
};

export default myApp;