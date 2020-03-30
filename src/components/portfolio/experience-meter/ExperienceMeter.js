import React from 'react'
import {ExperienceMeterRow, Label} from './ExperienceMeter.style'
import PropTypes from 'prop-types'
import Meter from "./meter/Meter"

const ExperienceMeter = ({
  language,
  level
}) => {
  return (
    <ExperienceMeterRow>
      <Label>{language}</Label>
      <Meter level={level}/>
    </ExperienceMeterRow>
  )
}

ExperienceMeter.propTypes = {
  language: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
}

export default ExperienceMeter
