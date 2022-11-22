import React from "react";
import '../styles/footer.scss'

export const Footer = ({footerInfo}) => {
    return (
        <>
            <div className="footer">
                <div className="footer__container">
                    <div className="footer__main-part main-part">
                        <div className="main-part__contacts contacts">
                            <span className="contacts__title footer-title">Интернет-магазин</span>
                            <ul className="contacts__phone phone">
                                {footerInfo.phones.map((phone, index) => (
                                    <li key={index} className="phone__number footer-description">{phone}</li>))}
                            </ul>
                            <ul className="contacts__social social">
                                <li className="social__link">
                                    <a href={'/'}><img src={require('../images/telegram.png')} alt={'telegram'}/></a>
                                </li>
                            </ul>
                        </div>
                        <div className="main-part__address address">
                            <span className="address__title footer-title">Адрес магазина</span>
                            <span className="address__description footer-description">{footerInfo.address}</span>

                        </div>
                        <div className="main-part__help help">
                            <span className="help__title footer-title">Помощь</span>
                            <ul className="help__links links">
                                {footerInfo.helps.map((help, index) => (
                                    <li key={index} className="links__item footer-description"><a
                                        href={help.link}>{help.title}</a></li>))}
                            </ul>
                        </div>
                        <div className="main-part__payment payment">
                            <span className="payment__title footer-title">Способ оплаты</span>
                            <ul className="payment__list">
                                <li className="payment__item footer-description"><img
                                    src={require('../images/visa.png')} alt={'visa'}/>
                                </li>
                                <li className="payment__item footer-description"><img
                                    src={require('../images/mastercard.png')}
                                    alt={'mastercard'}/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__rights-part footer-title">
                        <span>2000-2022 © Diamond — интернет дизайн магазина одежды, обуви и аксессуаров. Все права защищены. Доставка по всей России.<br/>
                            © THE STUDIO DIAMOND, 2022
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}