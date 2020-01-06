import styled from 'styled-components'
import { sizes, colors } from 'config/ui'

export const StyledNewsItem = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-right: 16px;
  max-width: 244px;
  @media (max-width: ${sizes.mdScreen}px) {
    max-width: 212px;
  }
`

export const Cover = styled.a`
  width: 100%;
  overflow: hidden;
  height: auto;
  border-radius: ${sizes.radius}px;
  cursor: pointer;
  position: relative;
`

export const ContainerImg = styled.div`
  width: 100%;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  max-width: 244px;

  > img {
    width: 100%;
    max-width: 244px;
    height: auto;
    vertical-align: top;
    border-radius: 10px;
  }

  @media (max-width: ${sizes.mdScreen}px) {
    max-width: 212px;

    > img {
      max-width: 212px;
    }
  }
`

export const ContainerInfoStyle = styled.div`
  padding: 0 8px;
`

export const TitleStyle = styled.h2`
  font-size: 16px;
  color: ${colors.black6};
  margin-bottom: 5px;
  margin-top: 8px;
  line-height: 1.3;
  padding-left: 8px;
`

export const DescriptionStyle = styled.p`
  font-size: 13px;
  color: ${colors.black4};
  margin: 0;
  line-height: 1.25;
  padding-right: 16px;
  padding-left: 8px;
`
