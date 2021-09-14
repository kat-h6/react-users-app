import React from 'react'
import { useParams } from "react-router-dom"

export default function About() {
  const { id } = useParams()
  return (
    <div>
      <h2>User { id }</h2>
    </div>
  )
}
