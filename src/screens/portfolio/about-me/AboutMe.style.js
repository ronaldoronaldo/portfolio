import styled from 'styled-components'
import {colors, fontWeights, sizes, spacing} from "../../../config/ui"

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


export const SectionTitle = styled.span`
  font-size: 32px;
  text-align: center;
  font-weight: ${fontWeights.bold};
  margin-bottom: ${spacing.small}px;
  margin-top: 16px;
  color: #BA7979;
`

export const SectionSubtitle = styled.span`
  font-size: 18px;
  font-weight: ${fontWeights.regular};
  color: #BA7979;
  text-align: center;
  margin-bottom: ${spacing.large + 16}px;
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
  flex-direction: column;
  @media (min-width: 608px) {
    flex-direction: row;
  }
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 32px;
`

export const Box1 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  min-width: 290px;
`

export const Box2 = styled.div`
  flex: 1;
  display: flex;
  min-width: 193px;
  flex-direction: column;
  @media (min-width: 490px) {
    flex-direction: row;
  }
  @media (min-width: 608px) {
    flex-direction: column;
  }
`

export const CertificateImage = styled.img`
  max-height: 400px;
  width: 100%;
`

export const PulseImage = styled.img`
  max-height: 216px;
  width: 100%;
  height: auto;
  @media (min-width: 608px) {
    width: 100%;
  }
  @media (min-width: 803px) {
    height: 178px;
  }
`