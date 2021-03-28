import styled, { css } from 'styled-components'
import { colors, spacing, fontWeights } from 'config/ui'

export const CardButtonStyle = styled.div`
  ${({ bgColor }) => css`
    width: 170px;
    background: ${bgColor ? bgColor : colors.white};
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 32px 16px;
    border-radius: 10px;
    box-shadow: 0 0 25px 0 rgba(83, 101, 111, 0.18);
    margin-right: 30px;
  `}
`

export const CardButtonTitle = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: ${fontWeights.bold};
    color: ${colors.black5};
    margin-bottom: ${spacing.small}px;
    margin-top: ${spacing.small}px;
`

export const CardButtonSubtitle = styled.div`
  font-size: 12px;
  color: ${colors.black4};
`
