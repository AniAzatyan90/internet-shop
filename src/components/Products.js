import {useContext} from "react"
import Context from "./Context"
import {FaShoppingBasket} from 'react-icons/fa'

export default function Products() {
    const value = useContext(Context);

    const {products, buscetProduct, setBuscetProduct} = value;

    const handleClick = (product) => {
        const pr = products.find((value) => value.id === product.id);
        setBuscetProduct([...buscetProduct, pr])
    };

    return (
        <div className="contProducts">
            {value.products.map(product =>
                <div className="products" key={product.id}>
                    <img src={product.picture} alt=""/>
                    <h2>{product.name}</h2>
                    <h3>{product.price} $</h3>
                    <FaShoppingBasket onClick={() => handleClick(product)}/>
                </div>
            )}
        </div>
    );
}