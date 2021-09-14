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
            <UserList users={users} />
        </div>
    )
}
