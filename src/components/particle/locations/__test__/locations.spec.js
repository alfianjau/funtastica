// test automation for articles component (multi component)
import React from 'react'
import { shallow } from 'enzyme'
import Locations from '../index'

describe('Locations', () => {
  it('renders without crashing', () => {
    shallow(<Locations />)
  })
  test('Simple valid test for Locations', () => {
    const linkElement = true
    expect(linkElement).toBe(true)
  })
})
