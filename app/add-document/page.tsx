"use client"
import { SetStateAction, useState } from "react";
import { Editor } from '@tinymce/tinymce-react';

export default function AddDocument() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [deleted, setDeleted] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, author, deleted })
    })

    if (res.ok) {
      setSuccessMessage("You have added your post!");
      setTitle("");
      setContent("");
      setAuthor("");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } else {
      setSuccessMessage("Failed to post the document. Please try again.");
    }
  };

  const handleEditorChange = (content: SetStateAction<string>, editor: any) => {
    setContent(content);
  };

  return (
    <div>
       
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-10 px-7 py-2 mb-4 text-s border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Author"
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
              'insertdatetime media table paste wordcount',
              'backgroundcolor'
            ],
            toolbar:
              'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | forecolor backcolor | help'
          }}
          onEditorChange={handleEditorChange}
        />

        <button type="submit">Save</button>

        {successMessage && (
        <p className="text-green-500 text-m mb-4 flex items-center justify-center">
          {successMessage}
        </p>
      )}

      </form>
    </div>
  );
}
