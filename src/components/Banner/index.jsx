import styles from "./Banner.module.css"
import circuloColorido from '../../assets/circulo_colorido.png'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresenacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Gustavo. Desenvolvedor Front-End. Aqui compartilho meus conhecimenos
                </p>

            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="circulo colorido" aria-hidden={true}
                />

                <img className={styles.minhaFoto} src="https://github.com/zambeli.png" alt="Foto do gustavo"/>
            </div>
        </div>
    )
}