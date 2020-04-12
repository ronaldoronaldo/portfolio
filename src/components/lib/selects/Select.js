import React, { useState } from 'react'
import { ButtonSelect } from 'components/lib/buttons'
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
                  specialCase,
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
          specialCase={specialCase}
          noMarginLeft={noMarginLeft}
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

export default Select
