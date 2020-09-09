import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faAtlas } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {
  HorizontalPadding,
  FullPadding,
  FourthContainer,
} from '../../utils/constant'

function Home() {
  return (
    <FullPadding>
      <FourthContainer>
        <Card
          actions={
            <FontAwesomeIcon
              icon={faAtlas}
              size="2x"
              className="rainbow-color_neutral"
            />
          }
          className="rainbow-p-around_large"
          title="Films"
          footer="Films Catalogue"
        >
          <FontAwesomeIcon
            icon={faFilm}
            size="6x"
            className="rainbow-color_neutral"
          />
          <HorizontalPadding>
            <Button
              label="Button Border"
              variant="neutral"
              className="rainbow-m-around_medium"
            >
              <Link to="/films">Open Catalogue</Link>
            </Button>
          </HorizontalPadding>
        </Card>
      </FourthContainer>
      <FourthContainer>
        <Card
          className="rainbow-p-around_large"
          title="Films"
          footer="Films Catalogue"
        >
          <HorizontalPadding>
            <Button
              label="Button Border"
              variant="neutral"
              className="rainbow-m-around_medium"
            >
              <Link to="/films">Films</Link>
            </Button>
          </HorizontalPadding>
        </Card>
      </FourthContainer>
      <FourthContainer>
        <Card
          className="rainbow-p-around_large"
          title="Films"
          footer="Films Catalogue"
        >
          <HorizontalPadding>
            <Button
              label="Button Border"
              variant="neutral"
              className="rainbow-m-around_medium"
            >
              <Link to="/films">Films</Link>
            </Button>
          </HorizontalPadding>
        </Card>
      </FourthContainer>
      <FourthContainer>
        <Card
          className="rainbow-p-around_large"
          title="Films"
          footer="Films Catalogue"
        >
          <HorizontalPadding>
            <Button
              label="Button Border"
              variant="neutral"
              className="rainbow-m-around_medium"
            >
              <Link to="/films">Films</Link>
            </Button>
          </HorizontalPadding>
        </Card>
      </FourthContainer>
    </FullPadding>
  )
}

export default Home
