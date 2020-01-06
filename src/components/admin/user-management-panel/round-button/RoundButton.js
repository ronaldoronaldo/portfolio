import React from 'react'
import { StyleButton, Notifications, ImageIcon } from './RoundButton.styles'
import FontIcon from 'components/lib/icons/FontIcon'
import PropTypes from 'prop-types'

const RoundButton = ({
  iconName,
  numberOfNotifications,
  onClick,
  iconColor,
  iconSize,
  img,
  bgColor,
  borderColor,
  ...rest
}) => {
  return (
    <StyleButton
      onClick={onClick}
      {...rest}
      bgColor={bgColor}
      borderColor={borderColor}
    >
      {!img && (
        <FontIcon
          iconName={iconName}
          size={iconSize || 24}
          style={{
            color: iconColor
          }}
        />
      )}
      {img && <ImageIcon src={img} />}
      {numberOfNotifications && (
        <Notifications>{numberOfNotifications}</Notifications>
      )}
    </StyleButton>
  )
}

export default RoundButton

RoundButton.propTypes = {
  iconName: PropTypes.string,
  numberOfNotifications: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onClick: PropTypes.func.isRequired,
  iconColor: PropTypes.string,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  iconSize: PropTypes.number
}
