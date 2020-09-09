import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ContainerMedium } from '../globalStyled'
import { Card, Button, Badge, Rating } from 'react-rainbow-components'

const ArticleDetail = (props) => {
  const location = useLocation()
  const {
    id,
    title,
    description,
    director,
    producer,
    release_date,
    rt_score,
  } = location.item

  return (
    <>
      <ContainerMedium>
        <Button
          label="Button Border"
          variant="neutral"
          className="rainbow-m-around_medium"
        >
          <Link to="/">Back to Home</Link>
        </Button>
        <Card
          title={title}
          footer={
            <div className="rainbow-align-content_space-between">
              <p>Director: {director}</p>
              <p>Producer: {producer}</p>
            </div>
          }
        >
          <Badge
            className="rainbow-m-around_medium"
            label={release_date}
            variant="lightest"
            title="Release Date"
          />
          <Rating value={rt_score} />
          <p className="App-abstract">{description}</p>
        </Card>
      </ContainerMedium>
    </>
  )
}

export default ArticleDetail
