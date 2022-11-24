import React from "react";
import '../styles/vertical-banner.scss'

export const VerticalBanner = () => {
    return (
        <>
            <div className="vertical-banner">
                <div className="vertical-banner__image">
                    <img src={require('../images/vertical-banner.png')} alt={'создай образ'}/>
                    <p>Создай<br/>свой образ</p>
                    <button className="vertical-banner__button"><span>Смотреть</span></button>
                </div>
            </div>
        </>
    )
}