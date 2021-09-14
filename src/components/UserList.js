import React from 'react'
import User from './User'

export default function UserList({ users }) {
    return (
        <div className="user-list">
            {users.map(user => {
                return (
                    <div className="container">
                        <User
                            key={user.id}
                            {...user}
                        />
                    </div>
                )
            })}
        </div>
    )
}
