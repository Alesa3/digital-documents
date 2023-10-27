"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Document } from "@/src/interfaces/interfaces";
import DocComponent from "@/app/components/DocComponent";

export default function Documents() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const getDocuments = async () => {
      const res = await fetch("/api/documents");
      const documents = await res.json();
      console.log("Documents", documents);
      setDocuments(documents);
    };
    getDocuments();
  }, []);

  return (
    <div>
      <div className="container mx-auto" style={{ maxWidth: '70%', maxHeight: '70%' }}>
        <div className="flex flex-wrap justify-center">
          {documents.map((document: Document) => (
            <Link key={document.id} href={`/documents/${document.id}`}>
              <DocComponent document={document} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
