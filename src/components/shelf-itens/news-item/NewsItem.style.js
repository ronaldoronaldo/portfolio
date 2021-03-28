import styled from 'styled-components'
import { sizes, colors, shadows } from 'config/ui'

export const StyledNewsItem = styled.div`
  width: 252px !important;
  margin-right: 16px;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 212px !important;
  }
`

export const Cover = styled.a`
  overflow: hidden;
  height: auto;
  border-radius: ${sizes.radius}px;
  cursor: pointer;

  &:hover {
    div:first-child {
      transform: scale(1.04);
      transform-origin: center bottom;
      position: relative;
      z-index: 3;
      box-shadow: ${shadows.shadowDown6};
      opacity: 0.75;
    }

    h2 {
      color: ${colors.idGreen};
    }
  }
`

export const ContainerImg = styled.div`
  width: 252px;
  height: 149px;
  overflow: hidden;
  transition: all 0.2s ease-in;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    border-radius: 10px;
    height: 100%;
    display: block;
  }

  @media (max-width: ${sizes.mdScreen}px) {
    width: 212px;
    height: 126px;
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
  transition: all 0.3s ease-in;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`

export const DescriptionStyle = styled.p`
  font-size: 13px;
  color: ${colors.black4};
  margin: 0;
  line-height: 1.25;
  padding-right: 16px;

  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  height: 33.2px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
