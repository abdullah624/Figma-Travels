import React from 'react';
import './leftDiv.css';
import Link from './Link';

export default function LeftDiv() {
    return (
        <div className="leftDiv">
            <Link iconName="menu" text="" />
            <hr className="hr1" />
            <div className="profile">
                <p className="p-img"></p>
                <p className="p-name">Amanda Victor</p>
            </div>
            <div className="clear"></div>
            <hr className="hr2"/>
            <Link iconName="local_airport" text="Flights" />
            <Link iconName="home" text="Stay" />
            <Link iconName="local_taxi" text="Car Rental" />
            <Link iconName="article" text="Things to do" />
            <Link iconName="luggage" text="Flight + Hotel" />
            <hr className="hr2"/>
            <Link iconName="transform" text="Explore" />
            <Link iconName="sell" text="Deals" />
            <Link iconName="alt_route" text="Routes" />
            <Link iconName="directions" text="Direct" />
            <hr className="hr2"/>
            <Link iconName="wysiwyg" text="Trips" />


        </div>
    )
}
