
import React from 'react';
import globe from './images/earth-fill.png'


 export default function Header(){
    return(
        <>
        <div className="header">
            <p><img src={globe}/>Our Travel Journal</p>
        </div>
        </>
    )
}