import styled, { css } from 'styled-components'
import { colors, sizes, fontWeights } from 'config/ui'
import { Input } from 'components/lib/inputs'
import Column from 'components/lib/grid/Column'
import IconButton from 'components/lib/buttons/IconButton'
import InputSearch from 'components/lib/inputs/InputSearch'
import { Container } from 'components/admin/user-management-panel/grid'

// Routes wrappers styles

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
`

export const Main = styled.div`
  ${({ minimize }) => css`
    background: ${colors.black1};
    flex: 1;
    padding-bottom: 56px;
  `}
`

// TODO: refactor on the following styles (they are used in user-management-panel edit pages)

export const WrapperStyle = styled.div`
  width: 100%;
  background: ${colors.white};
  margin-top: 32px;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
`

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 79px;
  border-bottom: 1px solid ${colors.black2};
  margin-bottom: 60px;
`

export const HeaderLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    width: 49px;
    height: 49px;
    margin-left: 9px;
    margin-right: 0;
    padding-right: 8px;
    > span {
      font-size: 18px;
    }
  }
`

export const HeaderRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const BodyStyle = styled.div`
  max-width: 620px;
  margin: 0 auto;
  position: relative;
`

export const RowStyle = styled.div`
  display: flex;
  align-items: center;
`

export const FinishButtons = styled(RowStyle)`
  justify-content: flex-end;
  margin-top: 32px;
`

export const PagedListHeader = styled(RowStyle)`
  margin-top: 31px;
  margin-bottom: 17px;
`

export const IconButtonStyled = styled(IconButton)`
  border: 1px solid;
  border-color: ${colors.black2};
  width: 95px;
  height: 40px;
  font-size: 15px;
`

export const ColumnStyle = styled(Column)`
  padding: 0;
`

export const ResetPasswordButton = styled(IconButton)`
  ${({ disabled }) => css`
    border: 1px solid ${disabled ? colors.black1 : colors.white};
    > span {
      margin-right: 16px;
      color: ${disabled && colors.black3};
    }
  `}
  height: 48px;
`

export const InputStyle = styled(Input)`
  margin-bottom: 36px;
  font-size: ${sizes.text}px;
  color: ${colors.black5};
  border-color: ${colors.black3};
`

export const ContainerPlatform = styled.div`
  display: flex;
  position: relative;

  span {
    width: 121px;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s linear;
  }

  > div {
    &:nth-of-type(1) {
      > span {
        top: -32px;
        left: -50px;
      }
      &:hover {
        > span {
          opacity: 1;
          visibility: inherit;
        }
      }
    }

    &:nth-of-type(2) {
      > span {
        top: -32px;
        left: -10px;
      }
      &:hover {
        > span {
          opacity: 1;
          visibility: inherit;
        }
      }
    }
  }
`

export const LeftColumnStyle = styled(Column)`
  padding: 0 12px 0 0;
`

export const RightColumnStyle = styled(Column)`
  padding: 0 0 0 12px;
`

export const DisabledInputStyle = styled(Input)`
  border-color: ${colors.black2};
  font-size: ${sizes.text}px;
`

export const AlertRecovery = styled.p`
  opacity: ${props => (props.open ? 1 : 0)};
  background: ${props => (props.bgColor ? props.bgColor : colors.green1)};
  color: ${props => (props.color ? props.color : colors.green3)};
  font-weight: ${fontWeights.regular};
  width: 100%;
  height: ${props => (props.open ? sizes.inputSizes.medium : 0)}px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  border-radius: 4px;
  transition: all 0.3s linear;
`

export const Overlay = styled.div`
  position: ${props => (props.position ? props.position : 'fixed')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: rgba(45, 45, 46, 0.8);
  z-index: 9;
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'row'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  opacity: ${props => (props.showOverlay ? 1 : 0)};
  visibility: ${props => (props.showOverlay ? 'auto' : 'hidden')};
  transition: all 0.2s ease-in-out;
`

export const AccessCodeLabel = styled.div`
  background: ${colors.blue};
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  height: 64px;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 55px;

  h3 {
    color: ${colors.white};
    font-size: ${sizes.h[5].size}px;
  }

  h2 {
    color: ${colors.white};
    font-size: ${sizes.h[4].size + 1}px;
  }
`

export const LabelAccordionStyle = styled.p`
  color: ${colors.blue};
  font-weight: ${fontWeights.bold};
  padding-left: 16px;
  margin-bottom: 0px;
`

export const ScholarshipSwitchContainer = styled.div`
  width: 100%;
  margin-top: 14px;

  > div {
    display: flex;
    justify-content: space-between;
    border: 1px solid ${colors.black2};
    height: 40px;
    align-items: center;
    border-radius: 5px;
    color: ${colors.black5};
    font-size: 13px;
    padding: 0 16px;
    margin-bottom: 32px;
    font-weight: ${fontWeights.bold};
    margin-bottom: 8px;
  }
`

export const InputSearchStyle = styled(InputSearch)``

export const ContainerAccordionMenu = styled.div`
  padding-right: 50px;
`

export const SpinnerContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`
