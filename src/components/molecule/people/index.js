import React from 'react'
import { Card, Chip } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faTasks,
  faHatCowboySide,
  faEye,
  faIdBadge,
  faVenusMars,
  faIdCardAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
  HorizontalPadding,
  VerticalPadding,
  Icon,
} from '../../../utils/constant'

const People = (props) => {
  const { name, gender, age, eye_color, hair_color } = props.item

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
            icon={faIdBadge}
            size="2x"
            className="rainbow-color_neutral"
          />
        }
        title={name}
        footer={<span>Ghibli Characters</span>}
      >
        <HorizontalPadding>
          <VerticalPadding>
            <FontAwesomeIcon
              icon={faBook}
              size="6x"
              className="rainbow-color_neutral"
            />
          </VerticalPadding>
          <Chip
            className="rainbow-m-around_medium"
            variant="outline-brand"
            label={
              <Icon variant="outline-brand">
                <FontAwesomeIcon
                  icon={faIdCardAlt}
                  className="rainbow-m-right_xx-small"
                />{' '}
                Age: {age}
              </Icon>
            }
          />
          <Chip
            className="rainbow-m-around_medium"
            variant="outline-brand"
            label={
              <Icon variant="outline-success">
                <FontAwesomeIcon
                  icon={faEye}
                  className="rainbow-m-right_xx-small"
                />{' '}
                Eye Color: {eye_color}
              </Icon>
            }
          />
          <Chip
            className="rainbow-m-around_medium"
            variant="outline-brand"
            label={
              <Icon variant="outline-success">
                <FontAwesomeIcon
                  icon={faHatCowboySide}
                  className="rainbow-m-right_xx-small"
                />{' '}
                Hair Color: {hair_color}
              </Icon>
            }
          />
          <Chip
            className="rainbow-m-around_medium"
            variant="outline-brand"
            label={
              <Icon variant="outline-brand">
                <FontAwesomeIcon
                  icon={faVenusMars}
                  className="rainbow-m-right_xx-small"
                />{' '}
                Gender: {gender}
              </Icon>
            }
          />
        </HorizontalPadding>
      </Card>
    </div>
  )
}

export default People
