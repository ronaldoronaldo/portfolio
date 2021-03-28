import React from 'react'
import {
  AlertOverlayStyle,
  AlertContainerStyle,
  AlertTitleStyle,
  AlertMessageStyle,
  ButtonContainer,
} from './Alert.style'
import { Button } from '../buttons'
import PropTypes from 'prop-types'

const Alert = ({ title, message, textButton, onClick, ...rest }) => {
  return (
    <AlertOverlayStyle {...rest} >
      <AlertContainerStyle>
        <AlertTitleStyle>{title}</AlertTitleStyle>
        <AlertMessageStyle>{message}</AlertMessageStyle>
        <ButtonContainer>
          <Button text={textButton} onClick={onClick} />
        </ButtonContainer>
      </AlertContainerStyle>
    </AlertOverlayStyle>

  )
}

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Alert
