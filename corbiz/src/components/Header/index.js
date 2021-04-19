import style from './index.module.sass';

export default function Header(){
    return <div className={style.header}>
        <input type="text" className={style.input} placeholder="¿Qué estás buscando?"></input>
        <p>Mi Cuenta</p>
    </div>
}
