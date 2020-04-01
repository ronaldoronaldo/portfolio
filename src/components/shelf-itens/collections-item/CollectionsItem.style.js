import styled from 'styled-components'
import { sizes, colors, fontWeights, shadows } from 'config/ui'
import { Link } from 'react-router-dom'

export const StyledCollectionsItem = styled.div`
  position: relative;
  width: 236px;
  height: auto;
  margin-right: 16px;
  outline: none;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 168px;
    margin-right: 8px;
  }
`

export const Cover = styled(Link)`
  box-shadow: ${shadows.shadowDown4};
  position: relative;
  width: 236px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  display: block;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.04);
    box-shadow: ${shadows.shadowDown8};

    div:nth-child(2) {
      color: ${colors.black4};
    }

    img {
      opacity: 0.75;
    }
  }

  @media (max-width: ${sizes.mdScreen}px) {
    width: 168px;
  }
`

export const ContImg = styled.div`
  width: 100%;
  position: relative;

  > img {
    transition: all 0.2s ease-in;
    width: 100%;
  }
`

export const ContText = styled.div`
  width: 100%;
  height: 88px;
  padding: 16px;
  background: #fff;
  color: ${colors.black5};
  font-weight: ${fontWeights.bold};
  line-height: 25px;
  text-align: center;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;

  @media (max-width: ${sizes.mdScreen}px) {
    font-size: 16px;
    line-height: 23px;
    padding: 16px 8px;
    height: 78px;
  }
`
