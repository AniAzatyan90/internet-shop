import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineHeart, AiFillCreditCard } from 'react-icons/ai'
import { useContext } from 'react'
import Context from './Context'
import { language } from '../database/Database';


export default function Header() {
    const value = useContext(Context);

    const changeLang = (e) => {
        value.setLang(language[e.target.getAttribute('data')].menu);
    }

    return (
        <header>
            <div className="logo">
                <h1>CLICK & COLLECT</h1>
            </div>

            <div className="icons">
                <FiShoppingCart onClick={() => {
                    value.setOpenbasket('polygon(0 0, 100% 0, 100% 100%, 0% 100%)');

                }} />

                <AiOutlineHeart />
                <div className='contPay'>
                    <AiFillCreditCard onClick={() => {
                        value.setOpenbasket('polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
                        document.body.style.overflow = 'hidden';
                    }} />
                </div>


            </div>
            <div className='language'>
                <button data='arm' onClick={changeLang}>ARM</button>
                <button data='rus' onClick={changeLang}>RUS</button>
                <button data='eng' onClick={changeLang}>ENG</button>
            </div>
        </header>
    )
}




