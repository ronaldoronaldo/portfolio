import styled from 'styled-components'
import { sizes } from 'config/ui'

export const ContainerStyle = styled.div`
  margin: 0 auto;
  max-width: 350px;
  padding: 0px ${sizes.padding}px;
  height: 100vh;
  min-height: 640px;
  @media (min-width: ${sizes.mdScreen}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const ImgIconStyle = styled.div`
  width: 100%;
  height: 40vh;
  @media (min-width: ${sizes.mdScreen}px) {
    height: 20vh;
  }
`
