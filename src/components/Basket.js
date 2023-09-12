import { useContext } from "react"
import Context from "./Context"

import BuscetItem from "./BuscetItem";

export default function Basket() {
    const value = useContext(Context);
    return (
        <div className="basket" style={{ clipPath: value.openbasket }}>
            <button className="closeBasket" onClick={() => {
                value.setOpenbasket('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
                document.body.style.overflow = 'auto';
            }}>X
            </button>
            <div className="topBasket">
                <p>Total : {value.total}$</p>
                <p>Count : {value.count}</p>
            </div>
            <div className="contentBasket">
                {value.buscetProduct.map(item => <BuscetItem item={item}></BuscetItem>)}
            </div>
        </div>
    )
}