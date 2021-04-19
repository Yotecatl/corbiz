import productos from '../../constant/productos';

//console.log({productos});
import Product from '../Product';

export default function ProductList() {
    return(
        <div className="productlist">
        
            {productos.map(() => {
                return <Product />;
            })}
        
        </div>
    );
}