import styled, { css } from 'styled-components'
import { sizes } from 'config/ui'

export const StyledItem = styled.div`
  ${({ gutter, shouldDisplay }) => css`
    display: ${shouldDisplay ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 0 ${gutter / 2}px;
    position: relative;
    z-index: 1;

    @media (max-width: ${sizes.smallScreen}px) {
      > div {
        width: 202px;
      }
    }
  `};
`
