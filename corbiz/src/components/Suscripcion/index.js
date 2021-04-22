import style from './index.module.sass'

export default function Suscripcion(){
    return <div className={style.suscripcion}>
        <h3>!Únete a nuestras novedades y promociones¡</h3>
        <input type="text" className={style.input} placeholder="Ingresa tu nombre" required></input>
        <input type="text" className={style.input} placeholder="Ingresa tu correo" required></input>
        <button className={style.button}>Suscribirme</button>
    </div>
}