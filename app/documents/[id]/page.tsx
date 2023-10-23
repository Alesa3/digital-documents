import React from 'react'
import {useRouter} from "next/navigation"


export default function DisplayDocument( {params} : { params: { id: number }}) {

    // const router = useRouter();

    // const handleEdit = (content: Content) => {
    //   router.push()
    // }

  return (
    <div>      
        <p>här visas dokumentet med id: {params.id}</p>
        <button>Edit</button> -    <button>Delete</button>
      
        </div>
    
  )
}
