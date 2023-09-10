import { useContext } from 'react'
import Context from './Context'

export default function Filter() {

    const value = useContext(Context);

    const styleFilter = {
        top: !value.openfilter ? '0%' : '100%',
        zIndex: !value.openfilter ? '-1' : '1'
    }

    return (
        <div className="contFilter" style={styleFilter}>
            <div className='searchPrice'>
                <input type="number" placeholder='Min Price' />
                <input type="number" placeholder='Max Price' />
                <button className='searchFilter'>Filter</button>
            </div>
            <input type="search" placeholder='Search' className='search' />
        </div>
    )
}