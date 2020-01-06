import styled, { css } from 'styled-components'
import { colors, fontWeights, sizes } from 'config/ui'
import { Link } from 'react-router-dom'

export const Menu = styled.nav``

export const MenuDropdownItem = styled.div`
  ${({ minimize, active, iconSize }) => css`
    position: relative;
    cursor: pointer;
    margin-bottom: ${sizes.padding}px;

    > a:nth-of-type(1) {
      display: flex;
      width: 100%;
      height: 40px;
      align-items: center;
      color: #595a5c;
      padding-left: ${props => (props.active ? 0 : 16)}px;
      border-radius: 10px;
      margin-bottom: ${minimize ? 16 : minimize && !active ? 16 : 4}px;
      font-weight: ${fontWeights.semiBold};

      > p {
        font-size: 15px;
        padding: 0;
        margin: 0;
      }

      span:first-child {
        margin-right: ${active && minimize ? -4 : active ? 2 : 14}px;
        color: ${active && minimize ? '#a97ed1' : 'none'};
        background: ${active && minimize ? '#f4f7fd' : 'none'};
        padding: ${active ? '8px 12px 8px 16px ' : 0};
        border-radius: 8px;
        min-width: ${iconSize}px;

        &:before {
          margin-right: ${minimize && 4}px;
        }
      }

      span:nth-of-type(2) {
        position: absolute;
        right: 0;
        margin-right: 10px;
      }
    }
  `}
`

export const ContainerDropdownItens = styled.div`
  ${({ minimize, active }) => css`
    position: ${minimize && 'absolute'};
    width: ${minimize && active && 180}px;
    display: ${minimize && !active ? 'none' : 'block'};
    background: ${colors.white};
    z-index: 9;
    left: 52px;
    border-radius: 5px;
    margin-top: -2px;
    top: 0;
    border: ${minimize && '1px solid #dee1e6'};
    box-shadow: ${minimize && '0 2px 2px 0 rgba(0, 0, 0, 0.08)'};
    opacity: ${active ? 1 : 0};

    > a {
      border-bottom: ${minimize && `1px solid ${colors.black2}`};
      padding: ${minimize && '11px 16px 11px 16px'};
      margin-bottom: ${minimize && 0};
      font-size: ${minimize && 16}px;
      height: ${minimize ? 48 : 40}px;
      font-weight: ${minimize ? fontWeights.normal : fontWeights.semiBold};
      color: ${minimize ? colors.black6 : '#86878b'};

      &:first-child {
        margin-top: ${!minimize && 4}px;
      }

      &:last-child {
        margin-bottom: ${minimize && 0};
        border-bottom: ${minimize && 'none'};
      }

      &:before {
        display: ${minimize && 'none'};
      }

      &:hover {
        background: ${minimize && colors.whiteDark};
      }

      &:active {
        background: ${minimize && colors.white};
      }
    }
  `}
`

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 23px;
  font-size: 13px;
  transition: 0.1s linear;

  &:before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border: 1px solid #b2b4b9;
    border-radius: 100%;
    margin-right: 22px;
    background: none;
    transition: 0.1s linear;
  }

  &:hover {
    color: #2d2d2e;

    &:before {
      border-color: #a97ed1;
      background: #a97ed1;
    }
  }

  &:last-child {
    margin-bottom: 16px;
  }
`
