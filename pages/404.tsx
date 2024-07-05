// pages/404.tsx
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-700 mb-4">The page you are looking for does not exist.</p>
        <Link href="/">
          <a className="bg-blue-500 text-white p-2 rounded">Go back home</a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
