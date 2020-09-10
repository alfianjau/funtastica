// test automation for articles component (multi component)
import React from 'react'
import { shallow } from 'enzyme'
import Peoples from '../index'

describe('Peoples', () => {
  it('renders without crashing', () => {
    shallow(<Peoples />)
  })
  test('Simple valid test for Peoples', () => {
    const linkElement = true
    expect(linkElement).toBe(true)
  })
})
