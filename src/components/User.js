import React from 'react'
import { Link } from 'react-router-dom';

export default function User({ id, name, username, email }) {
    return (
        <div className="card">
            <h5>{name}</h5>
            <div className="card-details">
                <p>{username}</p>
                <a href="link" >{email}</a>
            </div>
            <Link to={`/user/${id}`}>
                Find out more!
            </Link>
        </div>
    )
}
