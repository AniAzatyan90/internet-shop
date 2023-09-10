import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Context from './components/Context';
import Section from './components/Section';
import Category from './components/Category';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Basket from './components/Basket';
import { dbProducts, language, categImg } from "./database/Database";


function App() {

  const [lang, setLang] = useState(language.eng.menu);
  const [openfilter, setOpenfilter] = useState(false);
  const [products, setProducts] = useState(dbProducts);
  const [categories, setCategories] = useState(categImg);
  const [buscetProduct, setBuscetProduct] = useState([]);
  const [openbasket, setOpenbasket] = useState('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');

  const value = {
    lang, setLang,
    openfilter, setOpenfilter,
    products, setProducts,
    categories, setCategories,
    buscetProduct, setBuscetProduct,
    openbasket, setOpenbasket
  }
  const paths = ['/Products', '/Ապրանքներ', '/Товары'];
  return (

    <Context.Provider value={value}>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Section />}></Route>
          {paths.map((path, index) => (
            <Route key={index} path={path} element={<Products />} />
          ))}
          <Route path='/Home' element={<Section />}></Route>
        </Routes>
        <Basket />
        <Category />
      </div>
    </Context.Provider>
  );
}

export default App;