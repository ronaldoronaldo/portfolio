import React from 'react'
import {
  CardButtonStyle,
  CardButtonTitle,
  CardButtonSubtitle
} from './CardButton.style'
import PropTypes from 'prop-types'
import { FontIcon } from 'components/lib/icons'
import { colors } from 'config/ui'


const CardButton = ({
  children,
  onClick,
  style,
  bgColor,
  iconName,
  title,
  subtitle
}) => {
  return (
    <CardButtonStyle onClick={onClick} style={style} bgColor={bgColor}>
      <FontIcon iconName={iconName} size={64} sizeMobile={64} color={colors.primary} />
      <CardButtonTitle>
        {title}
      </CardButtonTitle>
      <CardButtonSubtitle>
        {subtitle}
      </CardButtonSubtitle>
    </CardButtonStyle>
  )
}

CardButton.propTypes = {
  size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  flex: PropTypes.number,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  btnWidth: PropTypes.number
}

export default CardButton
