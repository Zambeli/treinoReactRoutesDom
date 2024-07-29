import styles from "./Inicio.module.css"
import Posts from '../../../src/json/posts.json'
import Post from "../../components/PostCard";


export default function Inicio() {

    console.log(Posts);

    return (
            <ul className={styles.posts}>
                {Posts.map((post) => <Post key={post.id} post={post}/> )}
            </ul>
    )
}