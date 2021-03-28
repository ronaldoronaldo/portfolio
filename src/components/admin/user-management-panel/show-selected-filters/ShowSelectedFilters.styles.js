import styled from 'styled-components'
import { colors, fontWeights, sizes } from 'config/ui'

export const SelectedFiltersContainer = styled.div`
  flex: 1;
  background-color: ${colors.purple3};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 0px 12px;
  margin-top: 6px;
  margin-bottom: 3px;
`

export const FilterTagsWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const CloseSelectedFiltersWrapper = styled.button`
  width: 99px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
  font-size: ${sizes.label}px;
  border: 0;
  background: none;
  top: -4px;
  position: relative;
  cursor: pointer;
`

export const FiltersLabel = styled.div`
  margin-right: 8px;
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
  font-size: 13px;
  width: 90px;
  top: -4px;
  position: relative;
`
export const FiltersTagsContainer = styled.div`
  margin-right: 8px;
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
  font-size: 13px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: auto;
`
