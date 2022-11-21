import React from "react";

import '../styles/product.scss'

export const Product = (props) => {
    const image = props.image
    const price = props.price
    const discount = props.discount
    const title = props.title
    return (
        <>
            <div className="product">
                <div className="product__image">
                    <img src={image} alt={title}/>
                </div>
                <div className="product__price">
                    <div className="product__now"><span>{price.toLocaleString()} Р</span></div>
                    <div className="product__discount"><span>{discount.toLocaleString()} Р</span></div>
                </div>
                <div className="product__title"><span>{title}</span></div>
            </div>
        </>
    )
}