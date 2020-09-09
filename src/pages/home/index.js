import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import { Link } from 'react-router-dom'
import { HorizontalPadding } from '../../utils/constant'

function Home() {
  return (
    <>
      <Card title="Films" footer="Films Catalogue">
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
      <Card title="Films" footer="Films Catalogue">
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
      <Card title="Films" footer="Films Catalogue">
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
      <Card title="Films" footer="Films Catalogue">
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
    </>
  )
}

export default Home
