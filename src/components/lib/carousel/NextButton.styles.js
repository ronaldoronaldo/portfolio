import styled, { css } from 'styled-components'
import { IconButton } from 'components/lib/buttons'
import { colors } from 'config/ui'

export const StyledButton = styled(IconButton)`
  ${({ borderColor, disable, alignNews }) => css`
    display: ${disable && 'none !important'};
    position: absolute;
    right: -16px;
    top: ${alignNews ? 33 : 50}%;
    transform: translate(0, -50%);
    border: 1px solid transparent;
    border-color: ${borderColor || 'transparent'};
    width: 32px;
    border: 1px solid ${colors.black2};
    height: 32px;
    border-radius: 10px;
    display: flex;
    z-index: 2;

    > span {
      font-size: 10px;
      color: ${colors.black6};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:hover {
      background-color: ${colors.white};
      color: ${colors.gray};
    }
  `}
`
