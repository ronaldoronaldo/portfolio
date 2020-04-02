import styled from 'styled-components'
import { colors } from 'config/ui'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: ${colors.purple};
`

export const Description = styled.h5`
  width: 100%;
  text-align: center;
  color: ${colors.purple};
  max-width: 646px;
  line-height: 30px;
  ${props => props.noBottom && `margin-bottom: 0px;`} ${props =>
    props.noTop && `margin-top: 0px;`};
`
