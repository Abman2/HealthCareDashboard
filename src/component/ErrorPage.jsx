import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 mt-2">
                The page you are looking for does not exist or an other error occurred.
            </p>
            <Link to="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Go Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
