import React from "react";

import '../styles/popular-product.scss'

export const PopularProduct = ({data}) => {
    return (
        <>
            {data ? <div className="popular-product">
                    <div className="popular-product__image">
                        <img src={data.preview_image_link} alt={data.title}/>
                    </div>
                    <div className="popular-product__price">
                        <div className="popular-product__now"><span>{data.price.toLocaleString()} Р</span></div>
                        <div className="popular-product__discount"><span>2000 Р</span></div>
                    </div>
                    <div className="popular-product__title"><span>{data.title}</span></div>
                </div>
                :
                <div className="popular-product">
                    <div className="popular-product__image skeleton"></div>
                    <div className="popular-product__price">
                        <div className="popular-product__now skeleton"></div>
                        <div className="popular-product__discount skeleton"><span
                            className="visually-hidden">2 000 R</span>
                        </div>
                    </div>
                    <div className="popular-product__title skeleton"><span
                        className="visually-hidden">Nike AirMax 90's</span>
                    </div>
                </div>}
        </>
    )
}