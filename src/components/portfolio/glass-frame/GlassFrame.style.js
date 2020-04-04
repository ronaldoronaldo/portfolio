import styled from 'styled-components'
import { colors } from 'config/ui'
import { GlassAnimation } from 'styles/common/Animation.styles'

export const FrameContainer = styled.div`
  display: flex;
  border: 4px solid ${colors.red2};
  ${GlassAnimation}
`
