import React from 'react'

export default function User({ name, username, email }) {
    return (
        <div className="card">
            <h5>{name}</h5>
            <div className="card-details">
                <p>{username}</p>
                <a href="link" >{email}</a>
            </div>
            <button>More details</button>
        </div>
    )
}
