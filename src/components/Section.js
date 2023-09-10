import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import Context from "./Context"
import { useContext } from "react"


export default function Section() {
    const value = useContext(Context);


    // axios.get(baseURL).then((response) => {
    //     setPost(response.data);
    //   });
    const products = value.products.filter((product) => product.price > 200);

    const { buscetProduct, setBuscetProduct } = value;

    const handleClick = (product) => {
        const pr = products.find((value) => value.id === product.id);
        setBuscetProduct([...buscetProduct, pr])
    };

    return (
        <div className="slider">
            <Swiper slidesPerView={3} spaceBetween={20} grabCursor={true}>
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <img
                            src={product.picture}
                            onClick={() => handleClick(product)}
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}