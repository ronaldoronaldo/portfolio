import styled, { css } from 'styled-components'
import { colors } from 'config/ui'

export const SliderContainer = styled.div`
  ${({ active, disabled }) => css`
    border: 1px solid;
    background-color: ${disabled ? colors.black1 : active ? colors.idGreen : 'transparent'};
    border-color: ${disabled ? colors.black2 : active ? colors.idGreen : colors.black3};
    border-radius: 8px;
    width: 32px;
    height: 16px;
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
    cursor: pointer;
  `}
`

export const Slider = styled.div`
  ${({ active, disabled }) => css`
    border: 1px solid ${disabled ? colors.black2 : colors.black3};
    background-color: ${disabled ? colors.black1 : colors.white};
    border-radius: 20px;
    width: 20px;
    height: 20px;
    position: relative;
    transition: left 0.2s ease-out;
    top: -3px;
    left: ${disabled ? '-4px' : active ? '13px' : '-4px'};
    cursor: pointer;
  `}
`
