import styled from 'styled-components'
import { colors } from 'config/ui'
import ExpandableSearchInput from 'components/admin/user-management-panel/expandable-search-input/ExpandableSearchInput'
import { Dropdown } from 'components/lib/dropdown'
import {
  SelectItemStyle,
  SelectContainerStyle,
  SelectContainerHeader,
  TitleContainer,
  ActionsButtonsContainer,
  InputSearchStyle
} from 'components/lib/dropdown/Dropdown.style'

export const Container = styled.div`
  width: 100%;
  background: ${colors.blue};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

export const Logo = styled.a`
  cursor: pointer;
  > img {
    width: 185px;
    height: auto;
  }
`

export const WrapperInput = styled.div`
  width: 100%;
  max-width: 620px;

  > div {
    > div {
      > div {
        top: 0;
      }
    }
  }
  span::before {
    color: ${colors.black5};
  }
`

export const ExpandableSearchInputStyle = styled(ExpandableSearchInput)`
  font-size: 16px;
  color: ${colors.black3};
  font-weight.regular;
  border: none;

  &::-webkit-input-placeholder {
    color: ${colors.black3};
  }
`

export const ContainerMenu = styled.div`
  display: flex;
`

export const UserDropdownContainer = styled.div`
  position: absolute;
  width: 230px;
  right: 16px;
  top: 51px;
`

export const PlatformsDropdownContainer = styled.div`
  position: absolute;
  width: 276px;
  right: 111px;
  top: 51px;
`

export const DropdownStyled = styled(Dropdown)`
  > button:nth-child(3) {
      > div {
        > span {
          &:before {
            font-size: 14px;
          }
        }
      }
    }
  }
`
