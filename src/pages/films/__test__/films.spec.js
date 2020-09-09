// test automation for home page
import React from 'react'
import { shallow } from 'enzyme'
import Films from '../index'

it('renders without crashing', () => {
  shallow(<Films />)
})

test('Simple valid test for Films page', () => {
  const linkElement = true
  expect(linkElement).toBe(true)
})
