import styled from 'styled-components'
import { sizes, spacing } from 'config/ui'
import backgroundMock from 'front-end/images/img_login_web.png'
import { Link } from 'react-router-dom'

export const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerLeftStyle = styled.div`
  width: 100%;
  max-width: 460px;
  min-width: 300px;
  margin: 0 auto;
  padding: 0 32px;
`

export const ContainerRightStyle = styled.div`
  display: none;
  @media (min-width: ${sizes.lgScreen}px) {
    width: 100%;
    height: 100vh;
    min-height: 680px;
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
  height: 50vh;
  margin-bottom: ${sizes.padding}px;
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
  margin-bottom: ${spacing.spacingXSmall}px;
`

export const ContainerButtonsRow = styled.div`
  margin-top: ${spacing.spacingXSmall - 3}px;
  display: flex;
`

export const ContainerButtonRecovery = styled(Link)`
  width: 200px;
  display: block;
  margin: 44px auto ${sizes.padding}px auto;
`
