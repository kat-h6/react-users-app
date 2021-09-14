import React from 'react'
import { Link } from 'react-router-dom';

export default function UserDetails(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>username: {props.username}</h3>
            <p>email: {props.email}</p>
            <p>phone number: {props.phone}</p>
            <p>website: {props.website}</p>
            <p>company: {props.company.name}</p>
            <div>
                <p>Address:</p>
                <small>
                    street: {props.address.street} suite: {props.address.suite}
                </small>
                <small>{props.address.city} {props.address.zipcode}</small>
            </div>
            <Link to="/">
                <div class="btn btn-flat">Back</div>
            </Link>
        </div>
    )
}
