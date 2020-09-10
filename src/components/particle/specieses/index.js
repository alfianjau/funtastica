import React from 'react'
import { ArticleList, ArticleStyled } from './styled'
import Species from '../../molecule/species'

const Specieses = ({ articles }) => {
  return (
    <div className="article-listing">
      <ArticleList>
        {articles &&
          articles.map((article) => (
            <ArticleStyled key={article.id}>
              <Species item={article} />
            </ArticleStyled>
          ))}
      </ArticleList>
    </div>
  )
}

export default Specieses
