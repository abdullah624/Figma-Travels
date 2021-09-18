import React from 'react';
import './card1.css';


function Card1(props){
    const {status, heading, desc, footer, url} = props;
    return <div className="card" style={{backgroundImage: `url(${url})`}}>
        <div className="cardStatus">{status}</div>
        <h3 className="cardHeader">{heading}</h3>
        <p className="cardDesc">{desc}</p>
        <div className="cardFooter">{footer}</div>
    </div>
}

export default Card1;