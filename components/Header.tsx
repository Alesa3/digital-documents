import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center h-60 bg-white black"> 
        <h1 className="text-6xl text-rose-900 font-bold mt-6 mb-6">Your own digital documents</h1>
        <nav className="mt-4">
            <ul className="list-none flex gap-2">
            <Navbar />
            </ul>
        </nav>
    </header>
  )
}
