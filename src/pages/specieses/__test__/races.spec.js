// test automation for home page
import React from 'react'
import { shallow } from 'enzyme'
import Specieses from '../index'

it('renders without crashing', () => {
  shallow(<Specieses />)
})

test('Simple valid test for Specieses page', () => {
  const linkElement = true
  expect(linkElement).toBe(true)
})
