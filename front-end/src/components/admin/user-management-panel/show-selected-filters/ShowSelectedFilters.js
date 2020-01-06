import React from 'react'

import {
  SelectedFiltersContainer,
  FilterTagsWrapper,
  CloseSelectedFiltersWrapper,
  FiltersLabel,
  FiltersTagsContainer
} from './ShowSelectedFilters.styles'
import Tag from 'components/admin/user-management-panel/tags'

const ShowSelectedFilters = ({ filters, handleFilter, clearAllFilters }) => {
  const removeFilter = index => {
    const newFilters = filters.filter((filter, filterIndex) => {
      if (index !== filterIndex) {
        return filter
      }
    })
    handleFilter(newFilters)
  }

  const cleanAllFilters = () => {
    handleFilter([])
    clearAllFilters()
  }

  return (
    <SelectedFiltersContainer>
      <FilterTagsWrapper>
        <FiltersLabel>Filtros Ativos:</FiltersLabel>
        <FiltersTagsContainer>
          {filters.map((filter, index) => {
            return (
              <Tag
                key={index}
                text={filter}
                onClick={() => removeFilter(index)}
              />
            )
          })}
        </FiltersTagsContainer>
      </FilterTagsWrapper>
      <CloseSelectedFiltersWrapper onClick={cleanAllFilters}>
        Limpar filtros
      </CloseSelectedFiltersWrapper>
    </SelectedFiltersContainer>
  )
}

export default ShowSelectedFilters
