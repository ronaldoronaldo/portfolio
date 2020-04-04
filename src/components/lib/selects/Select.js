import React, { useState } from 'react'
import { ButtonSelect } from 'components/lib/buttons'
import PropTypes from 'prop-types'
import { Dropdown } from 'components/lib/dropdown'
import ClickOutside from 'utils/ClickOutside'

const Select = ({
  onChange,
  items,
  text,
  style,
  searchInputLabel,
  mobileStyle,
  headerTitle,
  label,
  labelColor,
  activeSelectButton,
  iconNext,
  marginBottom,
  dropdownStyle,
  noMarginLeft,
  ...rest
}) => {
  const [active, setActive] = useState(false)

  const onClickOutside = () => {
    if (mobileStyle) return
    setActive(false)
  }

  return (
    <React.Fragment>
      <ClickOutside onClickOutside={onClickOutside}>
        <ButtonSelect
          style={style}
          text={text}
          label={label}
          labelColor={labelColor}
          active={activeSelectButton}
          onClick={() => setActive(!active)}
          iconDirection={active}
          marginBottom={marginBottom}
          noMarginLeft={noMarginLeft}
        />
      </ClickOutside>
      {items.length > 0 && (
        <Dropdown
          items={items}
          active={active}
          onChange={onChange}
          iconNext={iconNext}
          searchInputLabel={searchInputLabel}
          mobileStyle={mobileStyle}
          headerTitle={headerTitle}
          closeDropdown={() => setActive(false)}
          style={dropdownStyle}
          {...rest}
        />
      )}
    </React.Fragment>
  )
}

Select.propTypes = {
  items: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  searchInputLabel: PropTypes.string,
  onChange: PropTypes.func,
  mobileStyle: PropTypes.bool,
  headerTitle: PropTypes.string,
  label: PropTypes.string,
  activeSelectButton: PropTypes.bool,
  itemsSchoolYear: PropTypes.bool
}

export default Select
