import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="list-none flex gap-4 mb-2">
        <li>
            <Link href="/">Home</Link>
        </li>
        
        <li>
            <Link href="/documents">View all documents</Link>
        </li>
    </ul>
  );
}