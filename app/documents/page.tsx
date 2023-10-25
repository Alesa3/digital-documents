"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Document } from "@/interfaces"
import DocComponent from '@/components/DocComponent';

export default function Documents() {

  const [documents, setDocuments] = useState([])

  useEffect(() => {
    const getDocuments = async () => {
      const res = await fetch("/api/documents")
      const documents = await res.json();
      console.log("Documents", documents);
      setDocuments(documents);
    }
    getDocuments();
  }, [])


  return (
    <div>
      {documents.map((document: Document) => (
        <Link key={document.id} href={`/documents/${document.id}`}>
        <DocComponent document={document} />

        </Link>

      ))}

    </div>
  )
}
