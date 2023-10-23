"use client";

import { useState } from 'react';

export default function AddDocument() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React, FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/documents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, content})
        })

        setTitle("");
        setContent("");

    }


    return (
        <div>
            <h1>New document</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
                <button type="submit">Save</button>
            </form>
        </div>
    )

}