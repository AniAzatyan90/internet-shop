import React, { useContext, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs'
import Context from "./Context"

export default function Item({ item }) {
    const value = useContext(Context);
    const [countProduct, setCountProduct] = useState(1)
    const addCount = (e) => {
        setCountProduct(countProduct + 1);
        value.setTotal(value.total + item.price)
    }
    return (
        <div key={item.id} className="itemBasket">
            <img src={item.picture} alt="" />
            <h2>{item.name}</h2>
            <h3>{item.price}$</h3>
            <div className="iconsBasket">
                <AiOutlineMinus />
                <p>{countProduct}</p>
                <AiOutlinePlus onClick={addCount} />
            </div>
            <BsFillTrashFill style={{ color: 'red' }} />
        </div>
    )
}
