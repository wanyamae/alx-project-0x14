import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} ALX Movie App. All rights reserved.
                </p>
                <div className="mt-2">
                    <Link href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    )
};

export default Footer;