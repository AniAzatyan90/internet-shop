import { useContext, useState } from 'react'
import Context from './Context'

export default function Filter() {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const value = useContext(Context);

    const styleFilter = {
        top: !value.openfilter ? '0%' : '100%',
        zIndex: !value.openfilter ? '-1' : '1'
    }

    return (
        <div className="contFilter" style={styleFilter}>
            <div className='searchPrice'>
                <input type="number" placeholder='Min Price' value={min}
                    onChange={(e) => {
                        setMin(e.target.value)
                    }} />
                <input type="number" placeholder='Max Price' value={max}
                    onChange={(e) => {
                        setMax(e.target.value)
                    }} />
                <button className='searchFilter' onClick={() => {
                    console.log(min);
                    if (min > 0 && max >
                        0) {
                        value.setProducts(value.products.filter(item => item.price >= min && item.price <= max))
                    }
                }}>Filter</button>
            </div>
            <input type="search" placeholder='Search' className='search' onChange={(e) => {
                if (e.target.value === "") {
                    value.setProducts(value.state)
                } else {
                    value.setProducts(value.products.filter(fil => fil.name.includes(e.target.value)))
                }
            }} />
        </div>
    )
}