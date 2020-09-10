import React from 'react'
import { ArticleList, ArticleStyled } from './styled'
import People from '../../molecule/people'

const Articles = ({ articles }) => {
  return (
    <div className="article-listing">
      <ArticleList>
        {articles &&
          articles.map((article) => (
            <ArticleStyled key={article.id}>
              <People item={article} />
            </ArticleStyled>
          ))}
      </ArticleList>
    </div>
  )
}

export default Articles
