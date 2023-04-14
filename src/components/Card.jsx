import React from "react"

export default function Card(props) {

    return (
        <div className="card--container">
            <img className="location--img" src={props.item.imageUrl} />  
            <div className="card--location--container">
                <img className="geo--icon" src="/geo-icon.png" />
                <span className="card--location">{props.item.location}</span>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                <h2 className="card--title">{props.item.title}</h2>
                <span className="card--dates">{props.item.startDate} - {props.item.endDate}</span>
                <p className="card--text">{props.item.description}</p>
            </div>
        </div>
    )
}