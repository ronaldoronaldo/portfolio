import React from 'react'
import { ExperienceMeterRow } from './ExperienceMeter.style'
import PropTypes from 'prop-types'

const ExperienceMeter = ({
  language,
  level
}) => {
  return (
    <ExperienceMeterRow>
      <Label>{language}</Label>
      <Meter lv={level}/>
    </ExperienceMeterRow>
  )
}

ExperienceMeter.propTypes = {
  language: PropTypes.string.isRequired,
  level: PropTypes.number
}

export default ExperienceMeter
