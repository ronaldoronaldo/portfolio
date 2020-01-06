import React, { useState } from 'react'

import {
  WrapperStyle,
  ActionButtonsWrapper,
  IconButtonStyle,
  SearchInputWrapper,
  ExcludeButtonsWrapper,
  ButtonsContainer,
  DropdownContainerStyle,
  IconButtonCancelStyle,
  IconButtonDeleteStyle
} from './ContentMenu.style'
import Title from 'components/lib/titles/Title'
import ExpandableSearchInput from 'components/admin/user-management-panel/expandable-search-input/ExpandableSearchInput'
import ModalFilter from 'components/lib/modal-filter'
import ShowSelectedFilters from 'components/admin/user-management-panel/show-selected-filters'
import ClickOutside from 'utils/ClickOutside'
import { Column, Row } from 'components/admin/user-management-panel/grid'
import { IconButton } from 'components/lib/buttons'
import { Dropdown } from 'components/lib/dropdown'
import { withRouter } from 'react-router-dom'
import { colors } from 'config/ui'

const ContentMenu = ({
  title,
  buttonCreateConfig,
  selects,
  handleCancelTableSelection,
  selectedTableItems,
  filter,
  itensDropdownMenu,
  buttonCreate = true,
  history,
  handleFilterSubmit,
  clearAllFilters,
  ...props
}) => {
  const [showFilter, setShowFilter] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeFilters, setActiveFilters] = useState([])

  const closeFilter = () => {
    setShowFilter(false)
  }

  const activateFilter = () => {
    setShowFilter(true)
  }

  const handleFilter = values => {
    setActiveFilters(values)
    handleFilterSubmit(values)
  }

  const handleAdd = () => {
    history.push(buttonCreateConfig.to)
  }

  return (
    <>
      {showFilter && filter && (
        <ModalFilter
          closeFilter={closeFilter}
          handleFilter={handleFilter}
          selects={selects}
          iconNext={true}
          handleFilterSubmit={handleFilterSubmit}
        />
      )}
      <Row>
        <WrapperStyle>
          <Title text={title} sizeMobile={3} size={3} textAlign="left" />
          <ButtonsContainer>
            <ActionButtonsWrapper showButtons={selectedTableItems.length <= 0}>
              <SearchInputWrapper>
                <ExpandableSearchInput
                  onChange={() => console.log('oi')}
                  value={''}
                  placeholder="Busque por marca"
                />
              </SearchInputWrapper>

              {filter && (
                <IconButtonStyle
                  iconName="center"
                  text="Filtrar"
                  color={colors.black4}
                  iconSize={20}
                  style={{
                    marginLeft: 8,
                    border: '1px solid',
                    borderColor: colors.black2,
                    minWidth: 104
                  }}
                  textColorHover={colors.black5}
                  onClick={activateFilter}
                />
              )}
              {buttonCreate && (
                <IconButtonStyle
                  iconName="add"
                  onClick={handleAdd}
                  text={buttonCreateConfig.text}
                  primary
                  iconSize={16}
                  style={{
                    minWidth: 126
                  }}
                />
              )}
              <ClickOutside onClickOutside={() => setShowDropdown(false)}>
                <IconButton
                  iconName="ellipsis-vertical"
                  iconSize={16}
                  color={colors.black4}
                  style={{
                    marginLeft: 8,
                    width: 40,
                    border: '1px solid',
                    borderColor: colors.black2
                  }}
                  onClick={() => setShowDropdown(!showDropdown)}
                />
              </ClickOutside>
            </ActionButtonsWrapper>
            <DropdownContainerStyle>
              <Dropdown
                items={itensDropdownMenu}
                active={showDropdown}
                onChange={() => console.log('item click')}
                closeDropdown={() => setShowDropdown(false)}
                style={{
                  borderRadius: 5,
                  maxHeight: 800
                }}
              />
            </DropdownContainerStyle>
            <ExcludeButtonsWrapper showButtons={selectedTableItems.length > 0}>
              <IconButtonCancelStyle
                iconName="cancel"
                text="Cancelar"
                color={colors.black4}
                iconSize={13}
                onClick={handleCancelTableSelection}
              />
              <IconButtonDeleteStyle
                iconName="trash"
                text={`Excluir ${selectedTableItems.length} ${
                  selectedTableItems.length === 1 ? 'item' : 'itens'
                }`}
                bgColor={colors.red3}
                bgColorHover={colors.red3Dark}
                textColorHover={colors.white}
                color={colors.white}
                iconSize={16}
              />
            </ExcludeButtonsWrapper>
          </ButtonsContainer>
        </WrapperStyle>
      </Row>
      <Row>
        <Column lg={12}>
          {activeFilters.length > 0 && (
            <ShowSelectedFilters
              filters={activeFilters}
              handleFilter={handleFilter}
              clearAllFilters={clearAllFilters}
            />
          )}
        </Column>
      </Row>
    </>
  )
}

export default withRouter(ContentMenu)
