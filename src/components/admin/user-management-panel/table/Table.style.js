import styled, { css } from 'styled-components'
import { IconButton } from 'components/lib/buttons'
import { colors, fontWeights } from 'config/ui'
import { Link } from 'react-router-dom'

export const TableStyle = styled.div`
  width: 100%;
  background: ${colors.white};
  overflow-x: auto;
  border-radius: 5px;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.06);
  margin: 16px 0;
  position: relative;
`

export const TableHeadStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 64px;
  width: 100%;

  &:nth-child(1) {
    max-width: ${props => (props.col1Width ? props.col1Width : 45)}px;

    input[type='checkbox']:checked + label:before {
      font-family: iconcombo;
      content: '\uec4e';
    }
  }

  &:nth-child(2) {
    max-width: ${props => (props.col2Width ? props.col2Width : 336)}px;
  }

  &:nth-child(3) {
    max-width: ${props => (props.col3Width ? props.col3Width : 171)}px;
  }

  &:nth-child(4) {
    max-width: ${props => (props.col4Width ? props.col4Width : 171)}px;
  }

  &:nth-child(5) {
    max-width: ${props => (props.col5Width ? props.col5Width : 171)}px;
  }

  &:nth-child(6) {
    max-width: ${props => (props.col6Width ? props.col6Width : 171)}px;
  }

  &:nth-child(7) {
    max-width: ${props => (props.col7Width ? props.col7Width : 171)}px;
  }

  &:nth-child(8) {
    max-width: ${props => (props.col8Width ? props.colWidth : 171)}px;
  }

  &:hover {
    span {
      color: ${colors.black5} !important;
    }
  }
`

export const TableBodyStyle = styled.div``

export const TableRowStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 56px;
  border-bottom: 1px solid ${colors.black2};

  a {
    transition: 0.3s linear;
  }

  &:hover {
    a {
      color: ${colors.purple3};
    }

    span {
      div {
        button {
          span {
            color: ${colors.purple3};
          }
        }
      }
    }
  }

  &:last-child {
    border-bottom: none;
  }
`

export const TableDataStyle = styled.span`
  font-size: 13px;
  color: ${colors.black5};
  line-height: 16px;
  width: 100%;
  display: flex;
  padding: 8px 0px;

  &:nth-child(1) {
    max-width: ${props => (props.col1Width ? props.col1Width : 45)}px;
  }

  &:nth-child(2) {
    margin-left: 4px;
    max-width: ${props => (props.col2Width ? props.col2Width : 336)}px;
  }

  &:nth-child(3) {
    max-width: ${props => (props.col3Width ? props.col3Width : 171)}px;
  }

  &:nth-child(4) {
    max-width: ${props => (props.col4Width ? props.col4Width : 171)}px;
  }

  &:nth-child(5) {
    max-width: ${props => (props.col5Width ? props.col5Width : 171)}px;
  }

  &:nth-child(6) {
    max-width: ${props => (props.col6Width ? props.col6Width : 171)}px;
  }

  &:nth-child(7) {
    max-width: ${props => (props.col7Width ? props.col7Width : 171)}px;
  }

  &:nth-child(8) {
    max-width: ${props => (props.col8Width ? props.colWidth : 171)}px;
  }

  &:last-child {
    max-width: 100%;
    margin-left: 20px;
  }
`

export const LinkDataStyle = styled(Link)`
  cursor: pointer;
  color: ${colors.black5};
`

export const PaginationComponentStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > div {
    color: ${colors.black5};
    font-weight: ${fontWeights.bold};
    font-size: 13px;
    margin-top: 1px;

    > span {
      position: relative;
      font-size: 13px;
      color: ${colors.black5};
      font-weight: ${fontWeights.bold};
      padding: 0px 1px;
      transition: display 0.3s linear;
      border-radius: 4px;

      &:hover {
        background: ${colors.black2};
        cursor: pointer;

        > div {
          transition: opacity 0.5s linear;
          opacity: 1;
          max-height: 400px;
        }
      }

      > div {
        display: flex;
        max-height: 0px;
        overflow: hidden;
        opacity: 0;
        transition: opacity 0.3s linear;
        width: 126px;
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        border: 1px solid ${colors.black2};
        box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.06);
        z-index: 1;
        border-radius: 5px;
        top: 19px;
        left: -89px;
        background: ${colors.white};

        > span {
          height: 48px;
          padding-left: 10px;
          padding-top: 12px;
          color: ${colors.black6};
          font-size: 16px;
          line-height: 27px;
          text-align: left;
          font-weight: ${fontWeights.regular};
          border-bottom: 1px solid ${colors.black2};
          width: 100%;
          transition: background 0.2s linear;

          &:hover {
            background: ${colors.whiteDark};
          }

          &:active {
            background: ${colors.white};
          }
        }
      }
    }
  }

  &:last-child {
    > div {
      > span {
        > div {
          top: -193px;
        }
      }
    }
  }
`

export const IconButtonStyle = styled(IconButton)`
  ${({ borderColor }) => css`
    border: 1px solid transparent;
    border-color: ${borderColor || 'transparent'};
  `}

  width: 32px;
  border: 1px solid ${colors.black2};
  height: 32px;

  > span {
    font-size: 15px;
    color: ${colors.black4};
  }
`

export const HeaderTableStyle = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 64px;

  > span {
    margin-top: 3px;
    margin-right: 5px;
    font-size: 13px;
    font-weight: ${fontWeights.bold};
    color: ${colors.black6};
    text-transform: uppercase;
  }

  > div {
    display: flex;
    flex-direction: column;
    > span {
      font-size: 10px;
      color: ${props => (props.active ? colors.purple3 : colors.black3)};
    }

    > span:first-child {
      margin-bottom: -5px;
    }

    > span:last-child {
      margin-top: -5px;
    }
  }
`

export const ContainerActionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 8px;
  width: 100%;

  > button {
    margin-right: 8px;
    width: 32px;
    height: 32px;

    &:last-child {
      margin-right: 0;
    }
  }
  > a {
    margin-right: 8px;
  }
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;

  div {
    width: 50px;
    height: 50px;
  }
`
