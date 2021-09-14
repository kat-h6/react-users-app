import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

export default function User({ id, name, username, email }) {
    return (
        <div className="card">
            <Avatar className="large-avatar">{name[0]}</Avatar>
            <h5>{name}</h5>
            <div className="card-details">
                <p>@{username}</p>
                <a href="link" >{email}</a>
            </div>
            <div className="grey-btn">
                <Link to={`/user/${id}`}>
                    Get to know me
                </Link>
            </div>
        </div>
    )
}
