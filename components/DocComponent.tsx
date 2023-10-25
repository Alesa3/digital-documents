import React from 'react'
import { Document } from "@/interfaces"

interface Props {
  document: Document
}

function DocComponent(props: Props) {
  const formattedDate = new Date(props.document.createdAt).toLocaleString('en-US', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  const shortContent = props.document.content.substring(4, 30);

  return (
    <div className="bg-gray-100 rounded-xl m-5 p-10">
      <h3 className="text-xl text-rose-900">
        {props.document.title}
      </h3>

      <p>{shortContent}...</p>
      <div className="flex justify-between">
      <p className="text-sm text-gray-500">{formattedDate}</p>
      <p className="text-sm text-gray-500">{props.document.author}</p>

    </div>
    </div>


  )
}

export default DocComponent
