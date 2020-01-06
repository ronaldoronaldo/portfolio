import styled, { css } from 'styled-components'
import { colors } from 'config/ui'

export const BulletStyle = styled.div`
  ${({ active }) => css`
    background: ${active ? colors.primary : colors.black2};
    width: ${active ? 12 : 8}px;
    height: 8px;
    border-radius: 16px;
    margin-right: 8px;
  `}
`
