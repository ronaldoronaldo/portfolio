import React, { useState } from 'react'
import {
  ContainerTextInputStyle,
  TextInputStyle,
  SearchIconContainer
} from './ExpandableSearchInput.style'
import PropTypes from 'prop-types'
import FontIcon from 'components/lib/icons/FontIcon'
import { colors } from 'config/ui'
import ClickOutside from 'utils/ClickOutside'

const ExpandableSearchInput = ({
  placeholder,
  placeholderTextColor,
  style,
  value,
  onChange,
  submitSearch,
  iconSize,
  bgColor,
  open,
                                 removeWhenMobile,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleKeyUp = key => {
    if (key === 'Enter' && submitSearch){
      submitSearch()
    }
  }

  return (
    <ClickOutside onClickOutside={() => setIsFocused(false)}>
      <ContainerTextInputStyle removeWhenMobile={removeWhenMobile}>
        <SearchIconContainer
          isFocused={open ? true : isFocused}
          onClick={() => setIsFocused(true)}
        >
          <FontIcon
            iconName="search"
            size={iconSize || 18}
            style={{
              color: colors.black4,
              position: 'relative',
              right: 12,
              top: 3,
              cursor: 'pointer'
            }}
            onClick={submitSearch}
          />
        </SearchIconContainer>
        <TextInputStyle
          type="text"
          style={style}
          isFocused={open ? true : isFocused}
          {...rest}
          value={value}
          onFocus={handleFocus}
          onKeyUp={evt => handleKeyUp(evt.key)}
          onChange={evt => onChange(evt.target.value)}
          placeholder={isFocused || open ? placeholder : ''}
          bgColor={bgColor}
        />
      </ContainerTextInputStyle>
    </ClickOutside>
  )
}

ExpandableSearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  bgColor: PropTypes.string
}

export default ExpandableSearchInput
