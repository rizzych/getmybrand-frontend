import {Header} from "./ui/Header";
import {SliderBanner} from "./ui/SliderBanner";
import {Product} from "./ui/Product";
import './styles/main.scss'
import {Banner} from "./ui/Banner";

import narrowBanner from './images/narrow-banner.svg'

const products = [
    {
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8b4e3b5c-22ea-48da-8a73-ad824372ccd2/air-max-plus-fff-ayakkab%C4%B1s%C4%B1-zkNjCn.png',
        price: 10000,
        discount: 2000,
        title: 'Кроссовки AIR MAX 00000 /для спорта'
    },
    {
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8b4e3b5c-22ea-48da-8a73-ad824372ccd2/air-max-plus-fff-ayakkab%C4%B1s%C4%B1-zkNjCn.png',
        price: 10000,
        discount: 2000,
        title: 'Кроссовки AIR MAX 00000 /для спорта'
    },
    {
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8b4e3b5c-22ea-48da-8a73-ad824372ccd2/air-max-plus-fff-ayakkab%C4%B1s%C4%B1-zkNjCn.png',
        price: 10000,
        discount: 2000,
        title: 'Кроссовки AIR MAX 00000 /для спорта'
    },
    {
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8b4e3b5c-22ea-48da-8a73-ad824372ccd2/air-max-plus-fff-ayakkab%C4%B1s%C4%B1-zkNjCn.png',
        price: 10000,
        discount: 2000,
        title: 'Кроссовки AIR MAX 00000 /для спорта'
    },
    {
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8b4e3b5c-22ea-48da-8a73-ad824372ccd2/air-max-plus-fff-ayakkab%C4%B1s%C4%B1-zkNjCn.png',
        price: 10000,
        discount: 2000,
        title: 'Кроссовки AIR MAX 00000 /для спорта'
    },
    {
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8b4e3b5c-22ea-48da-8a73-ad824372ccd2/air-max-plus-fff-ayakkab%C4%B1s%C4%B1-zkNjCn.png',
        price: 10000,
        discount: 2000,
        title: 'Кроссовки AIR MAX 00000 /для спорта'
    }
]

const banner = {
    image: narrowBanner,
    title: 'Акция скоро закончится\n' +
        'ПОКУПАЙ СЕЙЧАС'
}

function App() {
    return (
        <>
            <Header/>
            <SliderBanner/>
            <div className="products__container products">
                <h1 className="products__title title">Популярное</h1>
                <div className="products__wrapper">
                    {products.map((product, index) => (
                        <Product key={index} image={product.image} price={product.price} discount={product.discount}
                                 title={product.title}/>
                    ))}
                </div>
            </div>
            <div className="banner__container"><Banner data={banner}/></div>
        </>
    );
}

export default App;
