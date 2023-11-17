"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Document } from "@/interfaces";

export default function DisplayDocument({ params }: { params: { id: number } }) {
  const router = useRouter();
  const [document, setDocument] = useState<Document | undefined>(undefined);

  useEffect(() => {
    const getDocument = async () => {
      const res = await fetch("/api/documents/" + params.id);
      const data = await res.json();
      setDocument(data[0]);
    };

    getDocument();
  }, [params.id]);

  const handleEdit = (document: Document) => {
    router.push("/edit-document/?id=" + params.id);
  };

  const handleDelete = async (id: number) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this document?"
    );
    if (shouldDelete) {
      const res = await fetch("/api/documents/" + id, {
        method: "DELETE",
      });

      if (res.ok) {
        router.push("/documents");
      }
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl m-8 p-10" style={{ maxWidth: "100%" }}>
      {document ? (
        <>
          <h3 className="text-xl text-rose-900 mb-10 font-bold">
            {document.title}
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(document.content),
            }}
          />

          <div className="text-right mt-10">
            <p className="text-sm text-gray-500">
              Created at:{" "}
              {new Date(document.createdAt).toLocaleString("en-US", {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </p>
            <p className="text-sm text-gray-500">Author: {document.author}</p>
            <div className="flex justify-end mt-10">
              <button
                onClick={(e) => handleEdit(document)}
                style={{ marginRight: "10px" }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button onClick={(e) => handleDelete(params.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

