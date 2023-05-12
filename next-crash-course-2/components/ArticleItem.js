import Link from "next/link"
import articlesStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
    return (
        <Link href={`/article/${article.id}`} legacyBehavior>
            <a className={articlesStyles.card}>
                <h3>{article.title} &rarr;</h3>
            </a>
        </Link>
    )
}
export default ArticleItem