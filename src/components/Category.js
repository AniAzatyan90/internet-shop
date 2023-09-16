import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Context from './Context';

export default function Category() {
    const value = useContext(Context);
    const categImg = value.categories;

    const handleCategoryClick = (category) => {
        if (category) {
            value.setProducts(value.state.filter((product) => product.name === category.name));
        }
    };

    return (
        <div className="contCategory">
            <Swiper slidesPerView={6} spaceBetween={20} grabCursor={true}>
                {categImg.map((category, i) => (
                    <SwiperSlide key={i}>
                        <div
                            style={{
                                width: '300px',
                                height: '90%',
                                background: `url(${category.picture})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="overflowCategory" onClick={() => handleCategoryClick(category)}>
                                {category.name}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
