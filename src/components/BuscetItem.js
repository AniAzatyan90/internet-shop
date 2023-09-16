import React, { useContext } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs'
import Context from "./Context"

export default function BuscetItem({ item }) {
    const value = useContext(Context);

    const addCount = () => {
        item.count = item.count + 1;
        value.setTotal(value.total + item.price);
        value.setCount(value.count + 1)
    };

    const reduce = () => {
        if (item.count > 1) {
            item.count = item.count - 1;
            value.setTotal(value.total - item.price);
            value.setCount(value.count - 1)
        }
    };


    const removeProduct = (productId) => {
        const datedProducts = value.buscetProduct.filter((product) => product.id !== productId);
        value.setBuscetProduct(datedProducts);

    };
    return (
        <div key={item.id} className="itemBasket">
            <img src={item.picture} alt="" />
            <h2>{item.name}</h2>
            <h3>{item.price}$</h3>

            <div className="iconsBasket">
                <AiOutlineMinus onClick={reduce} />
                <p>{item.count}</p>
                <AiOutlinePlus onClick={addCount} />
                <BsFillTrashFill
                    style={{ color: 'red' }}
                    onClick={() => {
                        value.setTotal(value.total - item.price * item.count);

                        
                        removeProduct(item.id);
                    }}
                />
            </div>
        </div>
    );
}