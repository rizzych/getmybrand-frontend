import React from "react";
import '../styles/banner.scss'

export const Banner = ({data}) => {
    return (<>
        <div className="banner">
            <div className="banner__image">
                <img src={data.image} alt={data.title}/>
                <span>{data.title}</span>
            </div>
        </div>
    </>)
}