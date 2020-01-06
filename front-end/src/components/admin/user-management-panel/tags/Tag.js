import React from 'react'
import { TagStyle } from './Tag.style'
import FontIcon from 'components/lib/icons/FontIcon'
import { colors } from 'config/ui'
import PropTypes from 'prop-types'

const Tag = ({ text, iconName, noIcon, onClick, border, style, ...props }) => {
  return (
    <TagStyle border={border} style={style} {...props}>
      {text}
      {!noIcon && (
        <FontIcon
          iconName={iconName ? iconName : 'cancel'}
          onClick={onClick}
          size={8}
          style={{
            marginLeft: 16,
            color: colors.purple3,
            cursor: 'pointer'
          }}
        />
      )}
    </TagStyle>
  )
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  onClick: PropTypes.func,
  border: PropTypes.bool
}

export default Tag
