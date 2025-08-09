import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    ALX Movie App
                </Link>
                <nav>
                    <Link href="/" className="text-gray-400 hover:text-white mx-2">
                        Home
                    </Link>
                    <Link href="/movies" className="text-gray-400 hover:text-white mx-2">
                        Movies
                    </Link>
                    <Link href="/about" className="text-gray-400 hover:text-white mx-2">
                        About
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;