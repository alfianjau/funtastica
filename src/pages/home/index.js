import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFilm,
  faAtlas,
  faUserAstronaut,
  faMapMarkedAlt,
  faDna,
} from '@fortawesome/free-solid-svg-icons'
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
            size="4x"
            className="rainbow-color_neutral"
          />
          <HorizontalPadding>
            <Button
              label="Button Border"
              variant="neutral"
              className="rainbow-m-around_medium"
            >
              <Link to="/films">Open</Link>
            </Button>
          </HorizontalPadding>
        </Card>
      </FourthContainer>
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
          title="Character"
          footer="Character Catalogue"
        >
          <FontAwesomeIcon
            icon={faUserAstronaut}
            size="4x"
            className="rainbow-color_neutral"
          />
          <HorizontalPadding>
            <Button
              label="Button Border"
              variant="neutral"
              className="rainbow-m-around_medium"
            >
              <Link to="/peoples">Open</Link>
            </Button>
          </HorizontalPadding>
        </Card>
      </FourthContainer>
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
          title="Places"
          footer="Places Catalogue"
        >
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            size="4x"
            className="rainbow-color_neutral"
          />
          <HorizontalPadding>
            <Button
              label="Button Border"
              variant="neutral"
              className="rainbow-m-around_medium"
            >
              <Link to="/locations">Open</Link>
            </Button>
          </HorizontalPadding>
        </Card>
      </FourthContainer>
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
          title="Races"
          footer="Races Catalogue"
        >
          <FontAwesomeIcon
            icon={faDna}
            size="4x"
            className="rainbow-color_neutral"
          />
          <HorizontalPadding>
            <Button
              label="Button Border"
              variant="neutral"
              className="rainbow-m-around_medium"
            >
              <Link to="/species">Open</Link>
            </Button>
          </HorizontalPadding>
        </Card>
      </FourthContainer>
    </FullPadding>
  )
}

export default Home
