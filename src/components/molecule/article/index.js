import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import { Link } from 'react-router-dom'
import { HorizontalPadding } from '../../../utils/constant'

const Article = (props) => {
  const { id, title, rt_score, release_date } = props.item

  return (
    <div className="rainbow-p-around_large">
      <Card
        title={title}
        footer={<span>Year release date: {release_date}</span>}
      >
        <HorizontalPadding>
          {/* <p className="App-lead_paragraph">{abstract}</p> */}
          <span>score: {rt_score}</span>
          <Button
            label="Button Border"
            variant="neutral"
            className="rainbow-m-around_medium"
          >
            <Link to={{ pathname: id, ...props }}>Details</Link>
          </Button>
        </HorizontalPadding>
      </Card>
    </div>
  )
}

export default Article
