import PostModelo from "../../components/PostModelo";
// import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'

export default function SobreMim () {
    return (
        <PostModelo fotoCapa={'https://github.com/zambeli.png'} titulo="Sobre mim">

            
            <h3 className={styles.subtitulo}>
                Olá eu sou o Gustavo
            </h3>

            <img src="https://github.com/zambeli.png" alt="" className={styles.fotoSobreMim}/>
        </PostModelo>
    )
}