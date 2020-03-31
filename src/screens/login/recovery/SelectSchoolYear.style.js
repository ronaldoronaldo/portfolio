import styled from 'styled-components'
import { Container } from 'components/lib/grid'
import { sizes } from 'config/ui'

export const ContainerStyle = styled(Container)`
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ContainerBackgroundStyle = styled.div`
  width: 100%;
  height: 40vh;
  min-height: 250px;
  @media (min-width: ${sizes.mdScreen}px) {
    display: none;
  }
`

export const RecoveryContainerStyle = styled.div`
  width: 100%;
  max-width: 400px;
`
export const ContainerBulletsStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 116px;
  padding-bottom: ${sizes.padding}px;
  @media (min-width: ${sizes.mdScreen}px) {
    margin-top: 150px;
  }
`
export const ContainerTitle = styled.div`
  max-width: 320px;
  @media (min-width: ${sizes.mdScreen}px) {
    max-width: 290px;
  }
`
