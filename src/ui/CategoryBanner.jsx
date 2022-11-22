import React from "react";
import '../styles/category-banner.scss'

export const CategoryBanner = ({banner}) => {
    return (<>
        <div className="category-banner">
            <div className="category-banner__small small">
                <div className="small__image"><img src={banner[0].image} alt={banner[0].title}/></div>
                <span className="small__title category-banner-title">{banner[0].title}</span>
                <span className="small__description category-banner-description">{banner[0].description}</span>
            </div>
            <div className="category-banner__big big">
                <div className="big__image"><img src={banner[1].image} alt={banner[1].title}/></div>
                <span className="big__title category-banner-title">{banner[1].title}</span>
                <span className="big__description category-banner-description">{banner[1].description}</span>
            </div>
        </div>
    </>)
}