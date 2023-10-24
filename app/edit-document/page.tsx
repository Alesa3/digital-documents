"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Document } from "@/interfaces";

export default function EditDocument() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [document, setDocument] = useState<Content | undefined>(undefined);

  const router = useRouter();

  const searchParams = useSearchParams();
  const documentId = searchParams.get("id");
  // console.log("documentid", documentId);

  useEffect(() => {
    const getDocument = async () => {
      const res = await fetch("api/documents/"+ documentId);
      const data = await res.json();
      setDocument(data[0]);
    };
    if (documentId) getDocument();

  }, [documentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/documents/"+ documentId, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, content})
    })

    if (res.ok) {
      router.push("/")
    }
  }


  return (
    <div>
      <h1>Edit this document</h1>
      {document ? (
          <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder={document.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)} className="w-full h-12 px-7 py-2 mb-4 text-s border border-gray-300 rounded-md" />
          
          <textarea
            type="text"
            placeholder={document.content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-80 px-40 py-20 text-s border border-gray-300 rounded-md" />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}


