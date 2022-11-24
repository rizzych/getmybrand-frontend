import React from "react";
import '../styles/pull-menu.scss'

export const PullMenu = ({isOpen, closeMenu}) => {
    return (
        <>
            <div className={isOpen ? "pull-menu" : "pull-menu bg-visibility"} onClick={() => closeMenu(false)}>
                <div className={isOpen ? 'pull-menu__background is-open' : 'pull-menu__background'}>
                    <text className={'s__container'}>Каталог</text>
                    <ul className="pull-menu__items">
                        <li className="pull-menu__item">
                            <a href={'https://google.com'}>
                                <div className="pull-menu__image">
                                    <img src={require('../images/category-shoes.png')} alt=""/>
                                    <span>Кроссовки</span>
                                </div>
                            </a>
                        </li>
                        <li className="pull-menu__item">
                            <a href={'https://google.com'}>
                                <div className="pull-menu__image">
                                    <img src={require('../images/category-shoes.png')} alt=""/>
                                    <span>Кроссовки</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}