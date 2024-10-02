import Link from "next/link";


const Header= () => (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
            <ul className="flex space-x-4">
                <li>
                    <Link className="text-gray-300 hover:text-white" href="/">
                       Home
                    </Link>
                </li>
                <li>
                    <Link href="/about"  className="text-gray-300 hover:text-white">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="text-gray-300 hover:text-white" href="/projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className="text-gray-300 hover:text-white" href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
