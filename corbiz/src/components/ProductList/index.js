import productos from '../../constant/productos';

//componentes
import Product from '../Product';

import style from './index.module.sass';

export default function ProductList() {
    return(
        <div className={style.productlist}>
            <div className={style.h3}>
                <h3>
                Más Vendidos
            </h3>
            <hr className={style.hr}></hr>
            </div>
        
            {productos.map((product, key) => {
                return <Product key ={key} product = {product} />;
            })}
        
        </div>
    );
}