"use client";

import { useState } from "react";

export default function AddDocument() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h1>New document</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-12 px-7 py-2 mb-4 text-xl border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-32 px-7 py-2 text-s border border-gray-300 rounded-md"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
