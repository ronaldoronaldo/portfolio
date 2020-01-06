import styled from 'styled-components'
import { sizes, colors } from 'config/ui'

export const AlertOverlayStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: hsla(203, 23%, 21%, 90%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

export const AlertContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  width: 90%;
  max-width: 400px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
  padding: ${sizes.padding}px;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.3);
`

export const AlertTitleStyle = styled.h5`
  color: ${colors.black6};
  font-size: ${sizes.h[5].size}px;
  margin-bottom: 8px;
`

export const AlertMessageStyle = styled.p`
  color: ${colors.black6};
  font-size: ${sizes.text};
  margin-bottom: 32px;
`

export const ButtonContainer = styled.div`
  width: 100%;
`
