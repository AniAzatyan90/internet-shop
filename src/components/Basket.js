import { useContext } from "react"
import Context from "./Context"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs'


export default function Basket() {
    const value = useContext(Context);
    return (
        <div className="basket" style={{ clipPath: value.openbasket }}>
            <button className="closeBasket" onClick={() => {
                value.setOpenbasket('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
                document.body.style.overflow = 'auto';
            }}>X</button>
            <div className="topBasket">
                <p>Total : {value.total}$</p>
                <p>Count : {value.count}</p>
            </div>
            <div className="contentBasket">
                {value.buscetProduct.map(item => <div key={item.id} className="itemBasket">
                    <img src={item.picture} alt="" />
                    <h2>{item.name}</h2>
                    <h3>{item.price}$</h3>
                    <div className="iconsBasket">
                        <AiOutlineMinus />
                        <p>1</p>
                        <AiOutlinePlus />
                    </div>
                    <BsFillTrashFill style={{ color: 'red' }} />
                </div>)}
            </div>
        </div>
    )
}