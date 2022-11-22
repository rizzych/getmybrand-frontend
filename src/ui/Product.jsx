import React from "react";
import '../styles/product.scss'

import favouriteIcon from '../images/add_to_favourite.svg'

export const Product = ({item}) => {
    return (
        <>
            <div className="product">
                <div className="product__image">
                    <img src={item.preview_image_link} alt={item.title}/>
                    <div className={'visually-hidden'}>Быстрый просмотр</div>
                    <span>-40%</span>
                </div>
                <div className="product__price price">
                    <div className="price__actual"><span>{item.price.toLocaleString()}</span></div>
                    <div className="price__before"><span>{(17000).toLocaleString()}</span></div>
                </div>
                <span className="product__title">{item.title}</span>
                <div className="product__actions">
                    <button className="action__add-to-cart action">В корзину</button>
                    <img src={favouriteIcon} alt="в избранное" className="action__add-to-favourite"/>
                </div>
            </div>
        </>
    )
}