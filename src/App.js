import {Header} from "./ui/Header";
import {SliderBanner} from "./ui/SliderBanner";
import {PopularProduct} from "./ui/PopularProduct";
import './styles/main.scss'
import {Banner} from "./ui/Banner";

import catBanner from './images/cat-banner.png'
import axios from "axios";
import {useEffect, useState} from "react";
import {Product} from "./ui/Product";
import {CategoryBanner} from "./ui/CategoryBanner";

import categoryBanner1 from './images/category-banner-1.png'
import categoryBanner2 from './images/category-banner-2.png'
import {Footer} from "./ui/Footer";

let data = {
    brand_name: [],
    page: (Math.random() + 1) * 4,
    price_max: 999999,
    price_min: 0,
    size: 6,
    sizes_filter: [],
    type_name: []
}
const footerInfo = {
    phones: ['+7(495) 654-20-25', '+7(495) 654-20-25'],
    address: 'Москва, ул.Мира 1',
    helps: [
        {title: 'Как оформить заказ', link: '/'},
        {title: 'Как выбрать размер', link: '/'},
        {title: 'Условия доставки', link: '/'},
        {title: 'Мои заказы', link: '/'},
        {title: 'Возврат', link: '/'},
    ]
}
const categoryBanner = [
    {
        title: 'Футболки',
        description: 'От мировых брендов',
        image: categoryBanner1
    },
    {
        title: 'Футболки',
        description: 'От мировых брендов',
        image: categoryBanner2
    }
]
const banner = {
    image: catBanner,
    title: ''
}

const getItems = async () => axios.post('https://mothersasg.lowhost.ru/items', data, {
    headers: {'Content-Type': 'application/json'}
})

function App() {
    const [items, setItems] = useState([])
    useEffect(() => {
        getItems().then((response) => setItems(response.data.data))
    }, [])

    console.log(items)

    return (
        <>
            <Header/>
            <div className="slider-banner__wrapper">
                <SliderBanner/>
            </div>
            <div className="products__container products">
                <h1 className="products__title title">Популярное</h1>
                <div className="products__wrapper">
                    {items.length > 0 ? items.map((item, index) => (
                        <PopularProduct key={index} data={item}/>
                    )) : [1, 2, 3, 4, 5, 6].map(() => <PopularProduct/>)}
                </div>
            </div>
            <div className="banner__container"><Banner data={banner}/></div>
            <div className="products__container products">
                <h1 className="products__title title">Скидки</h1>
                <div className="products__wrapper">
                    {items.length > 0 ? items.map((item, index) => (
                        <Product key={index} item={item}/>
                    )) : [1, 2, 3, 4, 5, 6].map(() => <PopularProduct/>)}
                </div>
            </div>

            <div className="banner__container products">
                <h1 className="products__title title">FRIDAY 13</h1>
                <CategoryBanner banner={categoryBanner}/>
            </div>
            <div className="banner__container"><Banner data={banner}/></div>

            <div className="products__container products">
                <h1 className="products__title title">Действует акция 11.11</h1>
                <div className="common-wrapper">
                    <div className="products__wrapper">
                        {items.length > 0 ? items.map((item, index) => (
                            <>
                                <Product key={index} item={item}/>
                            </>
                        )) : [1, 2, 3, 4, 5, 6].map(() => <PopularProduct/>)}
                    </div>
                    {/*<div className="vertical-banner__wrapper">*/}
                    {/*    <VerticalBanner/>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="footer-wrapper">
                <Footer footerInfo={footerInfo}/>
            </div>

        </>
    );
}

export default App;
