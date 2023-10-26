"use client";

import { useState, useEffect, SetStateAction } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Document } from "@/interfaces";
import CancelButton from "@/components/CancelButton";
import { Editor } from "@tinymce/tinymce-react";

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
  // console.log("documentid", documentId);

  useEffect(() => {
    const getDocument = async () => {
      const res = await fetch("api/documents/" + documentId);
      const data = await res.json();
      setDocument(data[0]);
      setTitle(data[0].title);
      setContent(data[0].content);
      setAuthor(data[0].author);
    };
    if (documentId) getDocument();
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
      router.push("/documents");
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div>
      <h1>Edit this document</h1>
      {document ? (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            // placeholder={document.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-12 px-7 py-2 mb-4 text-s border border-gray-300 rounded-md"
          />
          <input
            type="text"
            // placeholder={document.author}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full h-10 px-7 py-2 mb-4 text-s border border-gray-300 rounded-md"
          />
           <Editor
          apiKey='pj1o9u0f7oks50yep5f29ryf2ztizh5tmx4e8ism7xvfqto7'
          value={content}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image',
              'charmap print preview anchor help',
              'searchreplace visualblocks code',
              'insertdatetime media table paste wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | forecolor | help',
              language: 'en',
              directionality: 'ltr'
          }}
          onEditorChange={handleEditorChange}
        />
         
          <button type="submit">Save</button>
          <CancelButton onCancel={handleCancel} />

        </form>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}


