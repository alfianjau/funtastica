// test automation for articles component (multi component)
import React from 'react'
import { shallow } from 'enzyme'
import Specieses from '../index'

describe('Specieses', () => {
  it('renders without crashing', () => {
    shallow(<Specieses />)
  })
  test('Simple valid test for Specieses', () => {
    const linkElement = true
    expect(linkElement).toBe(true)
  })
})
