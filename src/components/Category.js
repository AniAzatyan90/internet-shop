import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { useContext } from "react"
import Context from "./Context"

export default function Category() {

    const value = useContext(Context);
    const categImg = value.categories

    return (

        <div className="contCategory">
            <Swiper slidesPerView={6} spaceBetween={20} grabCursor='true'>
                {categImg.map((pic, i) => <SwiperSlide>
                    <div key={i} style={{ width: '300px', height: '90%', background: `url(${pic.picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overflowCategory">{pic.name}</div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}