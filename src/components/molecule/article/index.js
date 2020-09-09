import React from 'react'
import { Card, Button, Rating } from 'react-rainbow-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faTasks, faFilm } from '@fortawesome/free-solid-svg-icons'
import { HorizontalPadding } from '../../../utils/constant'

const Article = (props) => {
  const { id, title, rt_score, release_date } = props.item

  return (
    <div className="rainbow-p-around_large">
      <Card
        icon={
          <FontAwesomeIcon
            icon={faTasks}
            size="2x"
            className="rainbow-color_neutral"
          />
        }
        actions={
          <FontAwesomeIcon
            icon={faFilm}
            size="2x"
            className="rainbow-color_neutral"
          />
        }
        title={title}
        footer={<span>Year release date: {release_date}</span>}
      >
        <HorizontalPadding>
          <FontAwesomeIcon
            icon={faBook}
            size="6x"
            className="rainbow-color_neutral"
          />
          <Rating value={rt_score / 20} readOnly />
          <Button
            label="Button Border"
            variant="neutral"
            className="rainbow-m-around_medium"
          >
            <Link to={{ pathname: `/film/${id}`, ...props }}>Details</Link>
          </Button>
        </HorizontalPadding>
      </Card>
    </div>
  )
}

export default Article
