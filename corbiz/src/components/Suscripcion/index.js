import style from './index.module.sass'

export default function Suscripcion(){
    return <div className={style.suscripcion}>
        <input type="text" className={style.input} placeholder="Ingresa tu nombre" required></input>
        <input type="text" className={style.input} placeholder="Ingresa tu correo" required></input>
    </div>
}