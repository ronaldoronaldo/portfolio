import styled from 'styled-components'
import { Container } from 'components/lib/grid'
import { sizes } from 'config/ui'
import Alert from 'components/lib/alerts/Alert'
import { colors, fontWeights } from 'config/ui'

export const ContainerStyle = styled(Container) `
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const RecoveryContainerStyle = styled.div`
  width: 100%;
  max-width: 400px;
`

export const ContainerTitle = styled.div`
  max-width: 80%;
  @media (min-width: ${sizes.mdScreen}px) {
    max-width: 100%;
  }
`

export const AlertStyle = styled(Alert) `
 background: rgba(45, 45, 46, 0.96);
  h5 {
    color: ${colors.black6};
    font-weight: ${fontWeights.bold};
    margin-bottom: 8px;
    margin-top: 8px;
  }

  p {
    margin-top: 0;
    max-width: 260px;
    text-align: center;
    color: ${colors.black4};
  }

  > div {
    max-width: 328px;      
    position: absolute;
    top: 32px;
    border-radius: 5px;

    div {
      width: 90px;
      
      button {
        height: 40px;
      }
    }
  }
`