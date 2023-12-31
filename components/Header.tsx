import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/Navbar';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center sm:h-60 bg-white black">
      <h1 className="text-4xl sm:text-6xl text-rose-900 font-bold mt-4 sm:mt-6 mb-4 sm:mb-6 font-poppins">
        Digital Docs
      </h1>
      <nav className="mt-9">
        <ul className="list-none flex flex-col sm:flex-row gap-2">
          <Navbar />
        </ul>
      </nav>
    </header>
  );
}
