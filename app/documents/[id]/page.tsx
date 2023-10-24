"use client";
import React from 'react'
import {useRouter} from "next/navigation"
import { useState } from 'react';

    
export default function DisplayDocument( {params} : { params: { id: number }}) {
  const router = useRouter();
  const [content, setContent] = useState([]);


    const handleEdit = (content: Content) => {
      router.push("/edit-document/?id=" + params.id)
    }

    const handleDelete = async (id: number) => {
      const res = await fetch("/api/documents/" + id, {
        method: "DELETE"
      });
    
      if (res.ok) {

        setContent(content.filter((keep: Content) => keep.id != content.id))    

        router.push("/documents");
      } else {

      }
    }
    
  return (
    <div>      
        <p>här visas dokumentet med id: {params.id}</p>
        <button onClick={(e) => handleEdit(params.id)}>Edit</button> 
        <button onClick={(e) => handleDelete(params.id)}>Delete</button>
    </div>
  )
}
