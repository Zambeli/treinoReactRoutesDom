import { useNavigate } from 'react-router'
import BotaoPrincipal from '../../components/BotaoPrincipal'
import styles from './NaoEncontrada.module.css'

export default function NaoEncontrada () {

    const navegar = useNavigate()

    return (
        <>
        
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>

            <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

            <p className={styles.paragrafo}>
                Tem certeza que era isso que estava procurando?
            </p>

            <p className={styles.paragrafo}>
                Aguarde uns instantes e recarregue a página, ou volte para a pagina inicial
            </p>

            <div className={styles.botaoContainer}
            onClick={() => navegar(-1)}>
                <BotaoPrincipal tamanho='lg'>Voltar</BotaoPrincipal>
            </div>
        </div>

        <div className={styles.espacoEmBranco}></div>
        
        
        </>
    )
}