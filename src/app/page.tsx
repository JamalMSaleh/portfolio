
import dynamic from 'next/dynamic';


const HomePage = dynamic(() => import('app/pages/Home'), {
  loading: () => <p>Loading HomePage...</p>,
  ssr: false,
});
export default function Home() {
  return (
   <HomePage></HomePage>
  );
}
