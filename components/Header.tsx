import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar';

export default function Header() {
  return (
    <header className="flex items-center justify-around h-24 bg-white text-rose-400"> 
        <div className="absolute top-[150px]">
        <h1 className="text-6xl text-rose-900 font-bold">Your own digital documents</h1>
        </div>
        <nav>
            <ul className="list-none flex gap-2">
                <Navbar />
    
            </ul>
        </nav>
    </header>
    
  )
}