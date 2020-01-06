import React from 'react'
import Bullet from './Bullet'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const bullet = renderer.create(<Bullet />).toJSON()
  expect(bullet).toMatchSnapshot()
})
