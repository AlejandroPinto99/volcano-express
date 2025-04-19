import React from 'react'
import './ServiceCard.css'

export default function ServiceCard({ title, features, type, description }) {
    return (
        <div className={`card ${type}`}>
            <h4>{title}</h4>
            {description && <p>{description}</p>}
            <ul className="card-features">
                {
                    features.map((feature) => (
                        <li>{feature}</li>
                    ))
                }
            </ul>
        </div>
    )
}
