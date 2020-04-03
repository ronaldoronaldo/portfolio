import styled from 'styled-components'
import { colors, sizes, shadows } from 'config/ui'
import ExpandableSearchInput from 'components/admin/user-management-panel/expandable-search-input/ExpandableSearchInput'
import { Dropdown } from 'components/lib/dropdown'
import RoundButton from 'components/admin/user-management-panel/round-button/RoundButton'
import { Overlay } from 'styles/common/Common.styles'

export const Container = styled.div`
  ${({ bgColor }) => `
    width: 100%;
    background: ${bgColor ? bgColor : colors.blue3};
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    position: relative;
    top: 0;
  `}
`

export const Logo = styled.a`
  cursor: pointer;
  margin-top: 3px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  > img {
    width: 193px;
    height: 24px;
  }
`

export const WrapperInput = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  > div {
    width: 100%;
    > div {
      > div {
        top: 0;
      }
    }
  }
  span::before {
    color: ${colors.black5};
  }

  @media (max-width: ${sizes.lgScreen}px) {
    margin: 0 32px;
  }

  @media (max-width: ${sizes.mdScreen}px) {
    margin-left: 16px;
    margin-right: 0;
  }
`

export const ExpandableSearchInputStyle = styled(ExpandableSearchInput)`
  font-size: 16px;
  color: ${colors.black3};
  border: none;
  width: 100%;
  &::-webkit-input-placeholder {
    color: ${colors.black3};
  }
`

export const ContainerMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

export const UserDropdownContainer = styled.div`
  position: absolute;
  width: 195px;
  right: 16px;
  top: 59px;
  z-index: 10;
`

export const PlatformsDropdownContainer = styled.div`
  position: absolute;
  width: 276px;
  right: 64px;
  top: 59px;
  z-index: 10;

  @media (max-width: ${sizes.mdScreen}px) {
    position: fixed;
    top: inherit;
    bottom: 72px;
    left: 50%;
    transform: translate(-50%);
    z-index: 10;
  }
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
`

export const RoundButtonStyled = styled(RoundButton)`
  transition: all 0.2s linear;
  &:hover {
    box-shadow: ${shadows.shadowDown4};
    transform: scale(1.03);
  }

  @media (max-width: ${sizes.mdScreen}px) {
    display: none;
  }
`

export const MenuMobile = styled.div`
  width: 100%;
  height: 56px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: ${colors.white};
  display: flex;
  border-top: 1px solid ${colors.black2};
  padding: 0 ${sizes.padding}px;

  @media (min-width: ${sizes.mdScreen}px) {
    display: none;
  }
`

export const ItemMenu = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${sizes.label - 2}px;
  color: ${colors.black4};
  line-height: ${sizes.bodySmall}px;
  width: 64px;
  height: 56px;
  justify-content: center;
  padding-top: 4px;
`

export const ContainerItemMenu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OverlayWrapper = styled(Overlay)`
  z-index: 1;
  top: -56px;
`
