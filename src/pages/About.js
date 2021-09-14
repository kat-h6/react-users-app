import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export default function About() {
  const { id } = useParams()
  const [user, setUser] = useState(null);

  useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users/${id}`
      fetch(url)
        .then(response => response.json())
        .then(json => setUser(json))
  }, [id]);

  return (
    <div>
      {user && <div>
      <h2>{user.username}</h2>
      </div>}
    </div>
  )
}
