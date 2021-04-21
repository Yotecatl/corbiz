 import style from './index.module.sass'

export default function Footer(){
    return <div className={style.footer}>
        <div  className="Ubicacion">
            <h3>
                Ubicación
            </h3>
            <p>
                Avenida Andromeda, 2000. Bloco 6 e 8
                Alphavile SP 
                brasil@corebiz.ag
                +  55 11 3090 1039

            </p>
        </div>
        <div className="contacto">
             CONTÁCTANOS 
             HABLA CON UN CONSULTOR 

        </div>
        
        <div className="sponsor">
             logos

        </div>

        {/*Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>*/}
    </div>
}