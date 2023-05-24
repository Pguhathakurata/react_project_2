import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header'
import Card from './card'
import CardDetails from './card-details'
import Footer from './footer'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const CardData = CardDetails.map((details)=>{
    console.log(details.country);
    return(
        <Card
        key = {details.id}
        img = {details.image}
        country={details.country}
        googleLink = {details.googleLink}
        location={details.location}
        time={details.time}
        description={details.description}
    
        />
    )
})

function Page(){
    return(
        <>
            <Header/>
            {/* <Card/> */}
            {CardData}
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>
);



