import styled from 'styled-components'
import { sizes, spacing } from 'config/ui'
import backgroundMock from 'assets/images/img-login.png'
import { Link } from 'react-router-dom'
import { Input } from 'components/lib/inputs'

export const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const ContainerLeftStyle = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  margin: 0 auto;
  padding: 0 32px 34px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${sizes.lgScreen}px) {
    width: 460px;
    height: 100vh;
  }

  @media (min-width: ${sizes.xxlgScreen}px) {
    width: 560px;
  }

  @media (min-width: ${sizes.mdScreen}px) {
    max-width: 460px;
  }
`

export const BackContainerLeft = styled.div``

export const ContainerRightStyle = styled.div`
  display: none;
  @media (min-width: ${sizes.lgScreen}px) {
    display: flex;
    flex: 1;
    height: 100vh;
    display: block;
    background-image: url(${backgroundMock});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-width: 660px;
  }
`

export const ContainerHasEmailStyle = styled.div`
  min-height: 200px;
  margin-bottom: ${sizes.padding}px;
  display: flex;
  flex: 1;
  align-items: ${props => !props.hasEmail && 'center'};
  justify-content: ${props => !props.hasEmail && 'center'};
`

export const ContainerNotMe = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerButtonSiginInStyle = styled.div`
  margin-bottom: ${spacing.xSmall}px;
`

export const ContainerButtonsRow = styled.div`
  margin-top: ${spacing.xSmall - 3}px;
  display: flex;
`

export const ContainerButtonRecovery = styled(Link)`
  width: 200px;
  display: block;
  margin: 44px auto ${sizes.padding}px auto;
`

export const InputLogin = styled(Input)`
  margin-bottom: 16px;
`
