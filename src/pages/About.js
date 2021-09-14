import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import UserDetails from '../components/UserDetails'

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
    <div className="container">
      <div className="square-img">
      </div>
      {user && <div>
        <UserDetails {...user} />
      </div>}
    </div>
  )
}
