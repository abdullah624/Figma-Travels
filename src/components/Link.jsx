import React from 'react'

export default function Link(props) {
    const {iconName, text} = props;
    return (
        <div className="link">
            <a href="#" className="navLink">
                <span className="material-icons">{iconName}</span> {text}
            </a>
        </div>
    )
}
