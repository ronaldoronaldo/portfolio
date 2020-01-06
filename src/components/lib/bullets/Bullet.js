import React from 'react'
import { BulletStyle } from './Bullet.style'
import PropTypes from 'prop-types'

const Bullet = ({ active, children }) => {
  return <BulletStyle active={active}>{children}</BulletStyle>
}

Bullet.proptypes = {
  active: PropTypes.bool
}

export default Bullet
