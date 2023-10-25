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

  const shortContent = props.document.content.substring(0, 40);

  return (
    <div className="bg-gray-50 rounded-xl m-8 p-10">
        <h3 className="text-xl text-rose-900">
            {props.document.title}
        </h3>
        
        <p>{shortContent}...</p>
      <p className="text-sm text-gray-500">{formattedDate}</p>

    </div>

    
  )
}

export default DocComponent
