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
  return (
    
    <div className="bg-gray-50 rounded-xl m-2 p-4">
        <h3 className="text-xl text-rose-900">
            {props.document.title}
        </h3>
        <p>{props.document.content}</p>
      <p className="text-sm text-gray-500">{formattedDate}</p>
        
    </div>
  )
}

export default DocComponent