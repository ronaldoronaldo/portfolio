import styled, { css } from 'styled-components'
import { colors, fontWeights } from 'config/ui'

export const StyleButton = styled.button`
  ${({ bgColor, borderColor }) => css`
    background-color: ${bgColor || colors.white};
    border: 1px solid ${borderColor || colors.black2};
  `}
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`

export const Notifications = styled.div`
  min-width: 16px;
  min-height: 16px;
  background-color: ${colors.red3};
  color: ${colors.white};
  border-radius: 20px;
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${fontWeights.bold};
`
export const ImageIcon = styled.img`
  width: 18px;
  height: 18px;
  transform: rotate(180deg);
`