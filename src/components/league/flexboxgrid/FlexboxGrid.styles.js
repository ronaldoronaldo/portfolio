import styled, { css } from 'styled-components'
import { sizes } from 'config/ui'

export const FlexboxGridWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.start || 'row'};
  align-items: ${props => (props.flexstart ? 'flex-start' : 'baseline')};
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1600px;
  margin: 0 auto;
`
// Calculation of width: (columns / 16) - gutter
export const ColumnStyle = styled.div`
  ${({ xs = 16, s, m, l, xl }) => css`
    box-sizing: border-box;
    position: relative;
    width: ${(xs / 16) * 100}%;
    padding: 0 5px;

    @media (min-width: ${sizes.sScreen}px) {
      ${s && `width: ${(s / 16) * 100}%`};
      padding: 0 10px;
    }
    @media (min-width: ${sizes.mScreen}px) {
      ${m && `width: ${(m / 16) * 100}%`};
    }
    @media (min-width: ${sizes.lScreen}px) {
      ${l && `width: ${(l / 16) * 100}%`};
    }
    @media (min-width: ${sizes.xlScreen}px) {
      ${xl && `width: ${(xl / 16) * 100}%`};
    }
  `};
`

export const RowStyle = styled.div`
  display: flex;
  align-items: ${props => (props.flexstart ? 'flex-start' : 'baseline')};
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 -5px;

  @media (min-width: ${sizes.sScreen}px) {
    margin: 0 -10px;
  }
`
