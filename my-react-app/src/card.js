import React from 'react'
// import Pic1 from './images/img-1.png'
import Location from './images/map.svg'

export default function Card({country,googleLink,img,location,time,description}){
    return(
        <>
        <div className="card">
            <img className="scene" src={img}/>
            <div className="card-details">
                <div className="card-top">
                    <img src={Location}/>
                    <span>{country}</span>
                    <a href={googleLink}>View on google map</a>
                </div>
                <h1 className="heading1">{location}</h1>
                <h4 className="date">{time}</h4>
                <p className="details">{description}</p>
            </div>
        </div>
        </>
    )
}