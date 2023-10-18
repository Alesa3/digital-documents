import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="list-none flex gap-4">
        <li>
            <Link href="/">Home</Link>
        </li>
        
        <li>
            <Link href="/posts">View all docs</Link>
        </li>
    </ul>
  );
}
