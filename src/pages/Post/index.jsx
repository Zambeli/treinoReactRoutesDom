import './post.css'
import { useParams } from "react-router"
import posts from "../../../src/json/posts.json"
import PostModelo from "../../components/PostModelo"
import ReactMarkdown from "react-markdown"

export default function Post () {

    const parametros = useParams()

    const post = posts.find((post) => post.id === Number(parametros.id))

    if(!post) {
        return <h1>Post não encontrado...</h1>
    }

    return (
        <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}>


        <div className="post-markdown-container">
        <ReactMarkdown> 
            {post.texto}
        </ReactMarkdown>
        </div>

        </PostModelo>
    )
}

