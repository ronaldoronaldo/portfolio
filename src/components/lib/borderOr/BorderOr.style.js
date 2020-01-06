import styled from 'styled-components'
import { colors } from 'config/ui'

export const BorderOrBefore = styled.div`
  width: 45%;
  height: 1px;
  left: 0;
  background: ${colors.black2};
  position: absolute;
`

export const BorderOrAfter = styled.div`
  width: 45%;
  height: 1px;
  right: 0;
  background: ${colors.black2};
  position: absolute;
`

export const TextBorder = styled.p`
  text-align: center;
  color: ${colors.black5};
  font-weight: bold;
  font-size: 13px;
`
