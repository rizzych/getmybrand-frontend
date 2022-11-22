import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";

// Import Swiper styles
import "swiper/css";

import '../styles/common.scss'
import '../styles/slider-banner.scss'

import banner from '../images/banner-test.png'

const banners = [
    {
        image: banner,
        title: 'Гарниер',
        link: '/'
    },
    {
        image: banner,
        title: 'Что-то еще',
        link: '/'
    },
    {
        image: banner,
        title: 'Что-то еще',
        link: '/'
    }
]

export const SliderBanner = () => {
    const [swiper, setSwiper] = useState({})
    const [slide, setSlide] = useState(0)

    return (<>
        <div className="slider">
            <div className="slider__container">
                <div className="banner">
                    <Swiper
                        className="banner__wrapper"
                        slidesPerView={1}
                        centeredSlides={true}
                        speed={1000}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        onActiveIndexChange={(element) => setSlide(element.activeIndex)}
                        onInit={setSwiper}>
                        {banners.map((banner, index) => (
                            <SwiperSlide key={index}>
                                <img className="banner__image" src={banner.image} alt={banner.title}/>
                                <span className="visually-hidden">{banner.title}</span>
                            </SwiperSlide>))}
                    </Swiper>
                    <button onClick={() => swiper.slidePrev()} className="banner__slide-left slide-button"/>
                    <button onClick={() => swiper.slideNext()} className="banner__slide-right slide-button"/>
                </div>
                <div className="pagination__container">
                    <ul className="pagination">
                        {banners.map((banner, index) => (
                            <li key={index}
                                className={slide === index ? "pagination__element_active" : "pagination__element"}><span
                                className="visually-hidden">{banner.title}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>)
}