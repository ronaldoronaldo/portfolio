import React from 'react'
import {Circle, MeterRow} from './Meter.style'
import PropTypes from 'prop-types'

const Meter = ({
  level
}) => {
  const filled = level > 5 ? 5 : level
  const unfilled = 5 - filled
  let circlesArray = []
  for (let i=0; i<filled; i++){
    circlesArray.push(<Circle key={i} filled/>)
  }
  for (let j=0; j<unfilled; j++){
    circlesArray.push(<Circle key={(j+1)*10}/>)
  }
  return (
    <MeterRow>
      {circlesArray}
    </MeterRow>
  )
}

Meter.propTypes = {
  level: PropTypes.number.isRequired,
}

export default Meter
