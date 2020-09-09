import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Card, Button, Badge, Rating } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faJournalWhills } from '@fortawesome/free-solid-svg-icons'
import { ContainerMedium } from '../globalStyled'

const FilmDetail = (props) => {
  let location = useLocation()
  let history = useHistory()
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
          onClick={() => history.goBack()}
        >
          Go back
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
          <FontAwesomeIcon
            icon={faBookOpen}
            size="6x"
            className="rainbow-color_neutral"
          />
          <Badge
            className="rainbow-m-around_medium"
            label={release_date}
            variant="lightest"
            title="Release Date"
          />
          <Rating value={rt_score / 20} readOnly />
          <p className="App-abstract">{description}</p>
        </Card>
      </ContainerMedium>
    </>
  )
}

export default FilmDetail
