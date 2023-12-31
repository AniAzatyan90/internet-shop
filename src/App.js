import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Category from './components/Category';
import Context from './components/Context';
import Section from './components/Section';

import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Basket from './components/Basket';
import { dbProducts, language, categImg } from "./database/Database";
import ProductModal from './components/ProductModal';
import Pay from './components/Pay';



function App() {

    const [lang, setLang] = useState(language.eng.menu);
    const [openfilter, setOpenfilter] = useState(false);
    const [state, setState] = useState([...dbProducts]);
    const [products, setProducts] = useState(dbProducts);
    const [categories, setCategories] = useState(categImg);
    const [buscetProduct, setBuscetProduct] = useState([]);
    const [modalProduct, setModalProduct] = useState({});
    const [openbasket, setOpenbasket] = useState('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
    const [openProduct, setOpenProduct] = useState('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
    const [openmoney, setOpenmoney] = useState('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
    const [totalpay, setTotalpay] = useState(0)
    const [balancepay, setBalancepay] = useState(Math.round(Math.random() * 10000))

    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(1)

    const value = {
        lang, setLang,
        openfilter, setOpenfilter,
        products, setProducts,
        categories, setCategories,
        buscetProduct, setBuscetProduct,
        openbasket, setOpenbasket,
        total, setTotal,
        count, setCount,
        state, setState,
        openProduct, setOpenProduct,
        modalProduct, setModalProduct,
        openmoney, setOpenmoney,
        balancepay, setBalancepay,
        totalpay, setTotalpay


    }
    const paths = ['/Products', '/Ապրանքներ', '/Товары'];
    return (

        <Context.Provider value={value}>
            <div className="App">
                <Header />
                <Nav />
                <Category />
                <Routes>
                    <Route path='/' element={<Section />}></Route>
                    {paths.map((path, index) => (
                        <Route key={index} path={path} element={<Products />} />
                    ))}
                    <Route path='/Home' element={<Section />}></Route>
                </Routes>
                <Basket />
                <ProductModal />
                <Pay />

            </div>
        </Context.Provider>

    );
}

export default App;
