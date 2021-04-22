import style from './index.module.sass';
import logo from '../../imagenes/logo.png';
import banner from '../../imagenes/banner.png';
import checking from '../../imagenes/checking.png';
import cart from '../../imagenes/cart.png';
import glass from '../../imagenes/glass.png'


export default function Header(){
    return <div className={style.header}>
        <img src={logo} className={style.logo}></img>
        <input type="text" className={style.input} placeholder="¿Qué estás buscando?"></input>
        <img src={glass} className={style.lupa}></img>
        <div className={style.cuenta}>
                <img src={checking} className={style.checking}></img>
                <p>Mi cuenta</p>
                <img src={cart} className={style.cart}></img>
        </div> 
        <img src={banner} className={style.banner}></img> 
    </div>
}
