import React from 'react'

export default function DisplayDocument( {params} : { params: { id: number }}) {
  return (
    <div><p>här visas dokumentet med id: {params.id}</p></div>
  )
}
