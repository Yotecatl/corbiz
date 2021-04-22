 import style from './index.module.sass';
 import correo from '../../imagenes/correo.png';
 import headphones from '../../imagenes/headphones.png'
 import logos from '../../imagenes/logos.png'
 
 

export default function Footer(){
    return <div className={style.footer}>
        <div  className="Ubicacion">
            <h3>
                Ubicación
            </h3>
            <hr className={style.hr}></hr>
            <p className={style.p}>Avenida Andromeda, 2000. Bloco 6 e 8</p>
            <p className={style.p}>Alphavile SP </p>
            <p className={style.p}>brasil@corebiz.ag</p>
            <p className={style.p}>+  55 11 3090 1039</p>
                
        </div>
        <div className="contacto">
             <button className={style.footButton}>
                <img src={correo} className={style.correo}></img> 
                <span className={style.spanContanto}>CONTACTANOS</span>
             </button>

             <button className={style.footButton}>
                <img src={headphones} className={style.correo}></img> 
                <span className={style.spanContanto}>HABLA CON UN CONSULTOR</span>
             </button>
             
        </div>
        
        <div className="sponsor">
            <img src={logos}></img>
        </div>

        {/*Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>*/}
    </div>
}