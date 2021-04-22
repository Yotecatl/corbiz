import style from './index.module.sass'; 

import ProductList from "../ProductList";



export default function Product({product}){
    const {productId, productName, stars, imageUrl, listPrice, price, installments} = product;

    return (
        <div className={style.product}>
            <img src={imageUrl} className={style.image} />
            <p className={style.name}>{productName}</p>
            <p className={style.stars}>stars: {stars}</p>
            <p className={style.listPrice}>de $ {listPrice}</p>
            <p className={style.price}>por $ {price}</p>
            <button className={style.button}>COMPAR</button>
        </div>
    );
}