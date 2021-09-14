import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList'

export default function Home() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => setUsers(json))
    }, []);

    const [users, setUsers] = useState([]);
    
    return (
        <div>
            <h1>Find your developer</h1>
            <div className="container">
                <UserList users={users} />
            </div>
        </div>
    )
}
