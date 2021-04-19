import style from './index.module.sass'; 

import ProductList from "../ProductList";



export default function Product({product}){
    const {productId, productName, stars, imageUrl, listPrice, price, installments} = product;

    return (
        <div className={style.product}>
            <img src={imageUrl} className={style.image} />
        </div>
    );
}