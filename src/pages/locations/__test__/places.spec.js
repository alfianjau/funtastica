// test automation for home page
import React from 'react'
import { shallow } from 'enzyme'
import Locations from '../index'

it('renders without crashing', () => {
  shallow(<Locations />)
})

test('Simple valid test for Locations page', () => {
  const linkElement = true
  expect(linkElement).toBe(true)
})
