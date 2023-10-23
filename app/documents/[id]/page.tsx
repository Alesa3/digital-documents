"use client";
import React from 'react'
import {useRouter} from "next/navigation"
    
export default function DisplayDocument( {params} : { params: { id: number }}) {
  const router = useRouter();

    const handleEdit = (content: Content) => {
      router.push("/edit-document/?id=" + params.id)
    }

  return (
    <div>      
        <p>här visas dokumentet med id: {params.id}</p>
        <button onClick={(e) => handleEdit(params.id)}>Edit</button> -    <button>Delete</button>
      
        </div>
    
  )
}
