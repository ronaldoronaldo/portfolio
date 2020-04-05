import styled from 'styled-components'
import {colors, sizes} from "../../../config/ui"

export const AboutMeContainer = styled.div`
  color: ${colors.red2};
  position: relative;
  width: 100%;
  top: 134px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 56px;
  align-items: center;
  @media (min-width: ${sizes.mdScreen}px) {
    top: 212px;
  }
`

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
`

export const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 32px;
`

export const Box = styled.div`
  flex: 1;
  display: flex;
`

export const CertificateImage = styled.img`
  width: 100%;
`