"use client"

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="list-none flex flex-col items-center lg:flex-row lg:gap-4 font-quicksand">
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/documents">View all documents</Link>
      </li>
      <li>
        <Link href="/add-document">Create new document</Link>
      </li>
    </ul>
  );
}
