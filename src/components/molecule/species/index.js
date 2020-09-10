import React from 'react'
import { Card, Chip } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faTasks,
  faHatCowboySide,
  faEye,
  faIdBadge,
  faIdCardAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
  HorizontalPadding,
  VerticalPadding,
  Icon,
} from '../../../utils/constant'

const Species = (props) => {
  const { name, classification, eye_colors, hair_colors } = props.item

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
        footer={<span>Races of Ghibli</span>}
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
                Classification: {classification}
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
                Eye Colors: {eye_colors}
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
                Hair Colors: {hair_colors}
              </Icon>
            }
          />
        </HorizontalPadding>
      </Card>
    </div>
  )
}

export default Species
