import React from "react"
import Img from "gatsby-image"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"

const ArticleList = ({ articles }) => {
  const articleList = articles.map(article => (
    <div key={article._meta.uid}>
      <Link to={`/news/${article._meta.uid}`}>
        {RichText.render(article.title)}
        <Img
          alt={article.hero_image.alt}
          fluid={article.hero_imageSharp.childImageSharp.fluid}
        />
      </Link>
    </div>
  ))
  return <div>{articleList}</div>
}

export default ArticleList
