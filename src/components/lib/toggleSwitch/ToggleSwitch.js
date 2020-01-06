import React from 'react'
import { SliderContainer, Slider } from './ToggleSwitch.style'
import PropTypes from 'prop-types'

const ToggleSwitch = ({ onChange, active, disabled, ...rest }) => {
  return (
    <SliderContainer active={active} disabled={disabled} onClick={onChange} {...rest} >
      <Slider active={active} disabled={disabled} />
    </SliderContainer>
  )
}

ToggleSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
}

export default ToggleSwitch
