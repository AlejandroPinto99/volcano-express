import React from 'react'
import './destinyCard.css'

export default function DestinyCard({ photo, description, title }) {
    return (
        <div className="destiny-container">
            <div className="card-container" style={{ backgroundImage: `url(${photo})` }}>
                    <h2>{title}</h2>
            </div>
            <p>
                {description}
            </p>
        </div>
    )
}
