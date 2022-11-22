import React from "react";
import '../styles/header.scss'
import '../styles/common.scss'

import locationIcon from '../images/location_icon.svg'
import categoryMenuIcon from '../images/category_menu_icon.svg'
import searchIcon from '../images/search_icon.svg'
import favouriteIcon from '../images/favourite_icon.svg'
import shoppingCartIcon from '../images/shopping_cart_icon.svg'

import logo from '../images/logo.png'

const additionalInfoList = [
    {value: 'Как мы работаем сейчас', link: '/link'},
    {value: 'Доставка', link: '/link'},
    {value: 'О Нашем магазине', link: '/link'},
]
const categoryList = [
    {value: 'Новинки', link: '/link'},
    {value: 'Бренды', link: '/link'},
    {value: 'Мужское', link: '/link'},
    {value: 'Аксессуары', link: '/link'},
    {value: 'Sale', link: '/link'},
]
export const Header = () => {

    return (<>
        <header className="header">
            <div className="header__container">
                <div className="header__upper-part upper-part">
                    <div className="upper-part__region region">
                        <div className="region__currency currency"><span className="currency__value">RUB</span></div>
                        <div className="region__location location">
                            <img src={locationIcon} alt="страна" className="location__icon"/>
                            <span className="location__country">Россия</span>
                        </div>
                    </div>
                    <ul className="upper-part__additional-info additional-info">
                        {additionalInfoList.map((additionalInfo, index) => (
                            <li key={index} className="additional-info__link"><a
                                href={additionalInfo.link}>{additionalInfo.value}</a></li>))}
                    </ul>
                </div>
                <div className="header__middle-part middle-part">
                    <a href="/" className="middle-part__logo">
                        <img className={'unselectable'} src={logo} alt="get my brand"/>
                    </a>
                    <button className="middle-part__category-button violette-button">
                        <div><img className={'unselectable'} src={categoryMenuIcon} alt="каталог"/><span>Каталог</span>
                        </div>
                    </button>
                    <div className="middle-part__search search">
                        <input type="text" placeholder={'Искать на сайте'} className="search__input"/>
                        <div className="search__icon">
                            <img src={searchIcon} alt={'поиск'} className={'unselectable'}/>
                        </div>
                    </div>
                    <div className="middle-part__user-details user-details">
                        <button className="user-details__authorize">Войти</button>
                        <div className="user-details__actions-wrapper">
                            <div className="user-details__favourite favourite">
                                <img src={favouriteIcon} alt={"избранное"} className="favourite__icon unselectable"/>
                                <span className="favourite__item-count">0</span>
                            </div>
                            <div className="user-details__shopping-cart shopping-cart">
                                <img src={shoppingCartIcon} alt={"корзина товаров"}
                                     className="shopping-cart__icon unselectable"/>
                                <span className="shopping-cart__item-count">9</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__lower-part lower-part">
                    <ul className="lower-part__category-list">
                        {categoryList.map((category, index) => (
                            <li key={index}
                                className={category.value === 'Sale' ? 'lower-part__category-link_discount' : 'lower-part__category-link'}>
                                <a
                                    href={category.link}>{category.value}</a></li>))}
                    </ul>
                </div>
            </div>
        </header>
    </>)
}