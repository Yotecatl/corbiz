import productos from '../../constant/productos';

//componentes
import Product from '../Product';

import style from './index.module.sass';

export default function ProductList() {
    return(
        <div className={style.productlist}>
        
            {productos.map((product, key) => {
                return <Product key ={key} product = {product} />;
            })}
        
        </div>
    );
}