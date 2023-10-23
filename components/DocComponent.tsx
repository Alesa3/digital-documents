import React from 'react'
import { Document } from "@/interfaces"

interface Props {
    document: Document
}

function DocComponent(props: Props) {
  return (
    <div className="bg-rose-50 rounded-lg m-2 p-4">
        <h3 className="text-xl text-rose-600">
            {props.document.title}
        </h3>
        <p>{props.document.content}</p>
    </div>
  )
}

export default DocComponent