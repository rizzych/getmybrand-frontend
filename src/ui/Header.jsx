import React, {useState} from "react";
import '../styles/header.scss'
import '../styles/common.scss'

import locationIcon from '../images/location_icon.svg'
import categoryMenuIcon from '../images/category_menu_icon.svg'
import searchIcon from '../images/search_icon.svg'
import favouriteIcon from '../images/favourite_icon.svg'
import shoppingCartIcon from '../images/shopping_cart_icon.svg'
import mainPageIcon from '../images/main-menu-icon.svg'
import profilePageIcon from '../images/profile-menu-icon.svg'
import shoppingCartPageIcon from '../images/shopping-cart-menu-icon.svg'
import favouritePageIcon from '../images/favourite-menu-icon.svg'

import logo from '../images/logo.png'
import {PullMenu} from "./PullMenu";

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
const fixedMenu = [
    {
        image: mainPageIcon,
        title: 'Главная',
        link: '/'
    },
    {
        image: favouritePageIcon,
        title: 'Избранные',
        link: '/'
    },
    {
        image: shoppingCartPageIcon,
        title: 'Корзина',
        link: '/'
    },
    {
        image: profilePageIcon,
        title: 'Профиль',
        link: '/'
    }
]
export const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const openMenu = () => {
        document.body.style.overflow = 'hidden'
        setIsMenuOpened(!isMenuOpened)
    }

    const closeMenu = (isOpened) => {
        document.body.style.overflow = 'unset'
        setIsMenuOpened(isOpened)
    }
    return (<>
        <PullMenu isOpen={isMenuOpened} closeMenu={closeMenu}/>
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
                    <div className="button-wrapper">
                        <button className="middle-part__category-button violette-button">
                            <div><img className={'unselectable'} src={categoryMenuIcon}
                                      alt="каталог"/><span>Каталог</span>
                            </div>
                        </button>
                        <div className="middle-part__category-menu category-menu">
                            <div className="category-menu__wrapper">
                                <div className="category-menu__gender">
                                    <span>Мужчинам</span>
                                    <span>Женщинам</span>
                                </div>
                                <ul className="category-menu__categories category">
                                    <li className="category__link">
                                        <a href={'/'}>
                                            <div className="category__image">
                                                <img src={require('../images/category-shoes.png')} alt=""/>
                                                <span>Обувь</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="category__link">
                                        <a href={'/'}>
                                            <div className="category__image">
                                                <img src={require('../images/category-shoes.png')} alt=""/>
                                                <span>Обувь</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="category__link">
                                        <a href={'/'}>
                                            <div className="category__image">
                                                <img src={require('../images/category-shoes.png')} alt=""/>
                                                <span>Обувь</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="category__link">
                                        <a href={'/'}>
                                            <div className="category__image">
                                                <img src={require('../images/category-shoes.png')} alt=""/>
                                                <span>Обувь</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
            <div className="mobile-header__container">
                <div className="mobile-header__top">
                    <a href="/" className="">
                        <img className={'unselectable'} src={logo} alt="get my brand"/>
                    </a>
                    <div className="upper-part__region region">
                        <div className="region__currency currency"><span className="currency__value">RUB</span></div>
                        <div className="region__location location">
                            <img src={locationIcon} alt="страна" className="location__icon"/>
                            <span className="location__country">Россия</span>
                        </div>
                    </div>
                </div>
                <div className="mobile-header__bottom">
                    <div className="button-wrapper">
                        <button className="middle-part__category-button violette-button"
                                onClick={openMenu}>
                            <div><img className={'unselectable'} src={categoryMenuIcon}
                                      alt="каталог"/><span>Каталог</span>
                            </div>
                        </button>

                    </div>
                    <div className="middle-part__search search">
                        <input type="text" placeholder={'Искать на сайте'} className="search__input"/>
                        <div className="search__icon">
                            <img src={searchIcon} alt={'поиск'} className={'unselectable'}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="mobile-fixed-menu">
            <ul className="mobile-fixed-menu__links mobile-fixed-menu__container">
                {fixedMenu.map((menu, index) => (
                    <li key={index} className="mobile-fixed-menu__link">
                        <a href={menu.link}>
                            <div className="mobile-fixed-menu__image">
                                <img src={menu.image} alt={menu.title} className={'active-icon'}/>
                                <span className={'active-text'}>{menu.title}</span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    </>)
}