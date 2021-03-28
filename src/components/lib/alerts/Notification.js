import React, { useEffect } from 'react'
import {
  NotificationContainerStyle,
  NotificationTitleStyle,
  NotificationMessageStyle
} from './Notification.style'
import { colors } from 'config/ui'
import PropTypes from 'prop-types'
import FontIcon from 'components/lib/icons/FontIcon'
import { Transition } from 'react-transition-group'

const Notification = ({ title, message, onClose, theme, isOpened }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [isOpened])

  const duration = 400

  const defaultStyle = {
    transition: `top ${duration}ms ease-out, opacity ${duration}ms ease-out`,
    opacity: 0,
    top: 0
  }

  const transitionStyle = {
    entering: { opacity: 0, top: -50 },
    entered: { opacity: 1, top: 38 },
    exiting: { opacity: 0, top: 0 },
    exited: { opacity: 0, top: -100 }
  }

  return (
    <Transition in={isOpened} timeout={duration}>
      {state => (
        <NotificationContainerStyle
          theme={theme}
          style={{
            ...defaultStyle,
            ...transitionStyle[state]
          }}
        >
          <FontIcon
            iconName={'cancel'}
            size={15}
            color={colors.white}
            onClick={onClose}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              right: 16,
              top: 16
            }}
          />
          <NotificationTitleStyle theme={theme}>{title}</NotificationTitleStyle>
          <NotificationMessageStyle theme={theme}>
            {message}
          </NotificationMessageStyle>
        </NotificationContainerStyle>
      )}
    </Transition>
  )
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Notification
