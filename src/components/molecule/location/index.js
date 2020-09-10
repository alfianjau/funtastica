import React from 'react'
import { Card, Chip } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faTasks,
  faSmog,
  faMap,
  faGlobeAsia,
  faWater,
} from '@fortawesome/free-solid-svg-icons'
import {
  HorizontalPadding,
  VerticalPadding,
  Icon,
} from '../../../utils/constant'

const Location = (props) => {
  const { name, climate, terrain, surface_water } = props.item

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
            icon={faMap}
            size="2x"
            className="rainbow-color_neutral"
          />
        }
        title={name}
        footer={<span>Ghibli places</span>}
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
                  icon={faSmog}
                  className="rainbow-m-right_xx-small"
                />{' '}
                Climate: {climate}
              </Icon>
            }
          />
          <Chip
            className="rainbow-m-around_medium"
            variant="outline-brand"
            label={
              <Icon variant="outline-success">
                <FontAwesomeIcon
                  icon={faGlobeAsia}
                  className="rainbow-m-right_xx-small"
                />{' '}
                Terrain: {terrain}
              </Icon>
            }
          />
          <Chip
            className="rainbow-m-around_medium"
            variant="outline-brand"
            label={
              <Icon variant="outline-success">
                <FontAwesomeIcon
                  icon={faWater}
                  className="rainbow-m-right_xx-small"
                />{' '}
                Surface Water: {surface_water}
              </Icon>
            }
          />
        </HorizontalPadding>
      </Card>
    </div>
  )
}

export default Location
