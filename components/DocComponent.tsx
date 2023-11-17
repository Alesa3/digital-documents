import React from "react";
import { Document } from "@/interfaces";
import DOMPurify from "dompurify";

interface Props {
  document: Document;
}

function DocComponent(props: Props) {
  const formattedDate = new Date(props.document.createdAt).toLocaleString(
    "en-US",
    {
      dateStyle: "short",
      timeStyle: "short",
    }
  );

  const stripHtmlTags = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const sanitizedText = DOMPurify.sanitize(props.document.content, {
    ALLOWED_TAGS: [],
  });
  const shortContent = sanitizedText.substring(0, 20);

  return (
    <div
      className="bg-gray-100 rounded-xl m-5 p-10"
      style={{ height: "12rem", width: "20rem" }}
    >
      <h3 className="text-xl text-rose-900">{props.document.title}</h3>

      <p>{shortContent}...</p>

      <div className="flex justify-between">
        <p className="text-sm text-gray-500 mt-10">{formattedDate}</p>
        <p className="text-sm text-gray-500 mt-10">{props.document.author}</p>
      </div>
    </div>
  );
}

export default DocComponent;
