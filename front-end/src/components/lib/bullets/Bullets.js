import React from 'react'
import Bullet from './Bullet'
import PropTypes from 'prop-types'

const Bullets = ({ active }) => {
  const bulletsArr = [1, 2, 3, 4, 5, 6, 7]
  return bulletsArr.map((item, index) => {
    return (
      <Bullet
        key={index}
        active={item === active}
      />
    )
  })
}

Bullets.propTypes = {
  active: PropTypes.number
}

export default Bullets
