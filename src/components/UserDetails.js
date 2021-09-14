import React from 'react'
import { Link } from 'react-router-dom';

export default function UserDetails(props) {
    return (
        <div className="black-container">
            <h2>{props.name}</h2>
            <h5>@{props.username}</h5>
            <div className="details-container">
                <p>email: {props.email}</p>
                <p>phone number: {props.phone}</p>
                <p>website: {props.website}</p>
                <p>company: {props.company.name}</p>
                <p>address:</p>
                <p>
                    {props.address.street} {props.address.suite}
                </p>
                <p>{props.address.city} {props.address.zipcode}</p>
            </div>
            <div class="grey-btn">
                <Link to="/">Back</Link>
            </div>
        </div>
    )
}
