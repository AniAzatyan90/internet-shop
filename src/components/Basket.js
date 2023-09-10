import { useContext } from "react"
import Context from "./Context"


export default function Basket() {
    const value = useContext(Context);
    return (
        <div className="basket" style={{ clipPath: value.openbasket }}>

            {value.buscetProduct.map(product =>
                <div className="products" key={product.id}>
                    <img src={product.picture} alt="" />
                    <h2>{product.name}</h2>
                    <h3>{product.price} $</h3>
                </div>)}


            <button className="closeBasket" onClick={() => {
                value.setOpenbasket('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
                document.body.style.overflow = 'auto'
            }}>X</button>
        </div>
    )
}