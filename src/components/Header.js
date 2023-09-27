import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineHeart, AiFillCreditCard } from 'react-icons/ai'
import { useContext } from 'react'
import Context from './Context'
import { language } from '../database/Database';


export default function Header() {
    const value = useContext(Context);



    let vaildName = /^[A-Z]+$/
    let validNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/
    let validDate = /^\d{2}\/\d{2}$/
    let validCvv = /^\d{3}$/
    let validRegion = /\+\d{3}/
    let num = /^\d{2}$/


    const changeLang = (e) => {
        for (let key in language) {
            if (e.target.getAttribute('data') === key) {
                value.setLang(language[key].menu);
            }
        }
    }

    return (
        <header>
            <div className="logo">
                <img src='logo1.png'  alt=''/>
            </div>

            <div className="icons">
                <FiShoppingCart onClick={() => {
                    value.setOpenbasket('polygon(0 0, 100% 0, 100% 100%, 0% 100%)');

                }} />

                <AiOutlineHeart />
                <div className='contPay'>
                    <AiFillCreditCard onClick={() => {
                        value.setOpenmoney('polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
                        document.body.style.overflow = 'hidden'
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




