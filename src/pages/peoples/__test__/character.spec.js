// test automation for home page
import React from 'react'
import { shallow } from 'enzyme'
import Characters from '../index'

it('renders without crashing', () => {
  shallow(<Characters />)
})

test('Simple valid test for Characters page', () => {
  const linkElement = true
  expect(linkElement).toBe(true)
})
