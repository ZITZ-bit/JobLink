'use client';

import Link from 'next/link';
import "@/app/globals.css";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-gray-800">

      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <p className="text-xl mt-4">Oops... esta página no existe o fue eliminada.</p>

      <Link href="/" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-md">
        Volver al inicio
      </Link>
      
    </main>
  );
}
