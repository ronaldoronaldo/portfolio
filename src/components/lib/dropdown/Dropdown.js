import React, { useState } from 'react'
import {
  SelectItemStyle,
  SelectContainerStyle,
  SelectContainerHeader,
  TitleContainer,
  ActionsButtonsContainer,
  InputSearchStyle,
  ContainerIcon,
  ContainerImage,
  Image
} from './Dropdown.style'
import { IconButtonStyled } from 'styles/common/Common.styles'
import PropTypes from 'prop-types'
import FontIcon from 'components/lib/icons/FontIcon'
import { colors, fontWeights, spacing } from 'config/ui'
import Checkbox from 'components/admin/user-management-panel/checkbox'
import Button from 'components/lib/buttons/Button'

const Dropdown = ({
  onChange,
  items,
  style,
  searchInputLabel,
  mobileStyle,
  headerTitle,
  active,
  closeDropdown,
  iconNext,
  checkbox,
  actionsButtons,
  handleCancel,
  handleAdd,
  checked,
  itemsColor,
  ...rest
}) => {
  const [filteredItems, setFilteredItems] = useState(items)
  const [searchValue, setSearchValue] = useState('')
  const [itensChecked, setItensChecked] = useState([])

  const selectItems = () => {
    return filteredItems.map((item, index) => {
      if (!item) return

      if (checked && checked.indexOf(item.text || item) !== -1) {
        return
      }
      return (
        <SelectItemStyle
          key={index}
          {...rest}
          checkbox={checkbox}
          onClick={() => itemClicked(item)}
          color={itemsColor}
          iconItems={!!item.icon}
          itemDisabled={item.itemDisabled}
          image={item.image}
        >
          {checkbox && (
            <Checkbox
              checked={itensChecked.indexOf(item) !== -1}
              onChange={() => console.log('checkbox change')}
            />
          )}
          {item.icon ? (
            <ContainerIcon>
              <FontIcon
                iconName={item.icon}
                size={16}
                sizeMobile={16}
                color={colors.black5}
                style={{
                  fontWeight: fontWeights.bold,
                  marginRight: spacing.small
                }}
              />
              {item.text}
            </ContainerIcon>
          ) : item.image ? (
            <ContainerImage>
              <Image src={item.image} disabled={item.itemDisabled} />
              {item.text}
            </ContainerImage>
          ) : (
            item
          )}
          {iconNext && (
            <FontIcon iconName="caret-right" size={16} color={colors.black2} />
          )}
        </SelectItemStyle>
      )
    })
  }

  const itemClicked = item => {
    if (item.onClick) {
      item.onClick()
      return
    }
    const newArrItensChecked = itensChecked.filter(
      itemChecked => itemChecked !== item
    )
    setSearchValue('')
    onChange(item)
    !checkbox && closeDropdown()

    if (checkbox && itensChecked.indexOf(item) !== -1) {
      setItensChecked(newArrItensChecked)
    } else {
      checkbox && setItensChecked([...itensChecked, item])
    }
  }

  const searchItems = value => {
    setSearchValue(value)
    const tempItems = filteredItems.filter(item =>
      item.match(new RegExp(value, 'i'))
    )
    if (!value.length) {
      return setFilteredItems(items)
    }
    setFilteredItems(tempItems)
  }

  const closeSelectOptionsContainer = () => {
    setSearchValue('')
    closeDropdown()
  }

  return (
    <React.Fragment>
      {active && (
        <SelectContainerStyle
          mobileStyle={mobileStyle}
          style={style}
          checkbox={checkbox}
          {...rest}
        >
          <SelectContainerHeader mobileStyle={mobileStyle}>
            <TitleContainer>
              <p style={{ fontSize: 16, fontWeight: 'bold' }}>{headerTitle}</p>
              <FontIcon
                iconName={'cancel'}
                size={14}
                sizeMobile={14}
                color={colors.black3}
                onClick={closeSelectOptionsContainer}
                style={{ cursor: 'pointer' }}
              />
            </TitleContainer>
            <InputSearchStyle
              id={'dropdownSearchInput'}
              value={searchValue}
              placeholder={searchInputLabel}
              onChange={searchItems}
              onClose={closeSelectOptionsContainer}
              size={mobileStyle && checkbox && 'medium'}
              checkbox={checkbox}
            />
          </SelectContainerHeader>
          {filteredItems && selectItems()}
          {actionsButtons && (
            <ActionsButtonsContainer checkbox={checkbox}>
              <IconButtonStyled
                text="Cancelar"
                color={colors.black4}
                onClick={handleCancel}
                style={{
                  width: 95,
                  height: 40,
                  marginLeft: 8,
                  border: 'none'
                }}
                iconName=""
              />
              <Button
                text="Adicionar"
                primary
                onClick={() => handleAdd(itensChecked)}
                iconSize={16}
                style={{
                  width: 107,
                  height: 40,
                  marginLeft: 8,
                  marginRight: 16,
                  borderRadius: 10
                }}
              />
            </ActionsButtonsContainer>
          )}
        </SelectContainerStyle>
      )}
    </React.Fragment>
  )
}

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  searchInputLabel: PropTypes.string,
  onChange: PropTypes.func,
  mobileStyle: PropTypes.bool,
  headerTitle: PropTypes.string,
  active: PropTypes.bool,
  closeDropdown: PropTypes.func,
  checkbox: PropTypes.bool,
  actionsButtons: PropTypes.bool,
  handleAdd: PropTypes.func,
  handleCancel: PropTypes.func
}

export default Dropdown
