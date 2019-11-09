import React from "react"
import Img from "gatsby-image"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"

const ArticleList = ({ articles }) => {
  const articleList = articles.map(article => (
    <div key={article.uid}>
      <Link to={`/news/${article.uid}`}>
        {RichText.render(article.data.title)}
        <Img
          alt={article.data.hero_image.alt}
          fluid={article.data.hero_image.localFile.childImageSharp.fluid}
        />
      </Link>
    </div>
  ))
  return <div>{articleList}</div>
}

export default ArticleList
