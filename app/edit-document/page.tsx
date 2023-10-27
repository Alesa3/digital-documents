"use client"

import { useState, useEffect, SetStateAction } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Document } from "@/src/interfaces/interfaces";
import CancelButton from "@/app/components/CancelButton";
import { EditForm } from "@/app/components/EditDoc";
import { LoadingMessage } from "@/app/components/LoadingMsg";

export default function EditDocument() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [document, setDocument] = useState<Document | undefined>(undefined);
  

  const handleEditorChange = (content: SetStateAction<string>, editor: any) => {
    setContent(content);
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const documentId = searchParams.get("id");

  useEffect(() => {
    if (documentId) {
      const getDocument = async () => {
        const res = await fetch("api/documents/" + documentId);
        const data = await res.json();
        const doc = data[0];
        setDocument(doc);
        setTitle(doc.title);
        setContent(doc.content);
        setAuthor(doc.author);
      };
      getDocument();
    }
  }, [documentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/documents/" + documentId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, author }),
    });

    if (res.ok) {
      const postUrl = `documents/${documentId}`;
      router.push(postUrl);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div>
      {document ? (
        <EditForm
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          content={content}
          setContent={setContent}
          handleEditorChange={handleEditorChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <LoadingMessage />
      )}
       <div className="flex items-center justify-center">
      <CancelButton onCancel={handleCancel} />
      </div>
      
    </div>
  );
}