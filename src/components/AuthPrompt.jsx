import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthPrompt() {
  return (
    <div className=" min-h-screen font-serif bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Royal-X
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please sign in to access your profile
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Link
            to="/login"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            I already have an account
          </Link>
          <Link
            to="/signup"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Create a new account
          </Link>
        </div>
      </div>
    </div>
  );
} 