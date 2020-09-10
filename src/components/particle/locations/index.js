import React from 'react'
import { ArticleList, ArticleStyled } from './styled'
import Location from '../../molecule/location'

const Locations = ({ articles }) => {
  return (
    <div className="article-listing">
      <ArticleList>
        {articles &&
          articles.map((article) => (
            <ArticleStyled key={article.id}>
              <Location item={article} />
            </ArticleStyled>
          ))}
      </ArticleList>
    </div>
  )
}

export default Locations
