import styled from 'styled-components'
import { Container } from 'components/lib/grid'
import { sizes, colors, spacing } from 'config/ui'

export const ContainerStyle = styled(Container) `
  max-width: 600px;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`
export const ContainerBackgroundStyle = styled.div`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
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
  max-width: 80%;
  @media (min-width: ${sizes.mdScreen}px) {
    max-width: 100%;
  }
`

export const DoNotHaveEmailText = styled.div`
  font-size: 16px;
  margin-top: ${spacing.spacingLarge}px;
  color: ${colors.black3};
  text-align: center;
  a {
    color: ${colors.black4};
    text-decoration: underline;
  }
`
