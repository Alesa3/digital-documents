"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  return (
    <ul className="list-none flex flex-col items-center lg:flex-row lg:gap-4 mb-10 font-quicksand">
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
