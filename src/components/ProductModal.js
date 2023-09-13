import React from 'react'
import { useContext } from "react"
import Context from "./Context"

export default function ProductModal() {
    const value = useContext(Context);
    const modal = value.modalProduct
    return (
        <div className="basket" style={{ clipPath: value.openProduct }}>
            <button className="closeBasket" onClick={() => {
                value.setOpenProduct('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
                document.body.style.overflow = 'auto';
            }}>X
            </button>
            <div className="modul">
                <img src={modal.picture} alt="" />
                <h2>{modal.name}</h2>
                <h3>{modal.price} $</h3>
            </div>
        </div>
    )
}
