import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Card, Button, Badge, Rating } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faJournalWhills } from '@fortawesome/free-solid-svg-icons'
import { ContainerMedium } from '../globalStyled'
import { ColumnFlex, VerticalPadding } from '../../utils/constant'

const FilmDetail = (props) => {
  let location = useLocation()
  const {
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
        <Button
          label="Button Border"
          variant="neutral"
          className="rainbow-m-around_medium"
        >
          <Link to="/films">Go to Film Lists</Link>
        </Button>
        <Card
          actions={
            <FontAwesomeIcon
              icon={faJournalWhills}
              size="2x"
              className="rainbow-color_neutral"
            />
          }
          title={title}
          footer={
            <div className="rainbow-align-content_space-between">
              <p>Director: {director}</p>
              <p>Producer: {producer}</p>
            </div>
          }
        >
          <ColumnFlex>
            <VerticalPadding>
              <FontAwesomeIcon
                icon={faBookOpen}
                size="6x"
                className="rainbow-color_neutral"
              />
            </VerticalPadding>
            <Badge
              className="rainbow-m-around_medium"
              label={release_date}
              variant="lightest"
              title="Release Date"
            />
            <Rating value={rt_score / 20} readOnly />
            <p className="App-abstract">{description}</p>
          </ColumnFlex>
        </Card>
      </ContainerMedium>
    </>
  )
}

export default FilmDetail
