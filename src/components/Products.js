import { useContext } from "react"
import Context from "./Context"
import { BsBasket } from 'react-icons/bs'

export default function Products() {
    const value = useContext(Context);

    const { products, buscetProduct, setBuscetProduct } = value;

    const handleClick = (product) => {
        const pr = products.find((value) => value.id === product.id);
        pr.count = 1
        setBuscetProduct([...buscetProduct, pr])
        value.setTotal(value.total + pr.price)
    };

    return (
        <div className="contProducts">
            {value.products.map(product =>
                <div className="products" onClick={() => {

                    console.log('open');
                    value.setOpenProduct('polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
                    value.setModalProduct(product)

                }} key={product.id}>
                    <img src={product.picture} alt="" />
                    <h2>{product.name}</h2>
                    <h3>{product.price} $</h3>
                    <BsBasket onClick={() => !value.buscetProduct.includes(product) ? handleClick(product) : null}

                    />
                </div>
            )}
        </div>
    );
}