import styled from 'styled-components'
import { colors, sizes, fontWeights } from 'config/ui'
import {Link} from "react-router-dom"

export const Header = styled.div`
  ${({ bgColor }) => `
    height: 48px;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    flex-direction: row;
    position: relative;
    background-color: ${bgColor ? bgColor : colors.white};
  `};
`

export const GoBackButton = styled(Link)`
  position: absolute;
  left: 16px;
  top: 12px;
  padding: 0;
  background-color: transparent;
  border: none;
  @media (min-width: ${sizes.mScreen}px) {
    left: 54px;
    top: 50px;
  }
`

export const Title = styled.span`
  ${({ color }) => `
    font-size: ${sizes.bodySmall}px;
    color: ${color ? color : colors.black5};
    font-weight: ${fontWeights.regular};
  `};
`
