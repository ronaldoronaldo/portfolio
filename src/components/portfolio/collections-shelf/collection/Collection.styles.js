import styled from 'styled-components'
import { sizes, colors, fontWeights } from 'config/ui'
import { Link } from 'react-router-dom'

export const Item = styled.div`
  position: relative;
  padding: 0 10px;
  width: 50%;
  max-width: 202px;
  height: auto;
  margin-bottom: 30px;

  @media (min-width: ${sizes.sScreen}px) {
    width: 202px;
    padding: 0px 10px 40px 10px;
    margin-bottom: 0;
    cursor: pointer;
  }

  @media (max-width: ${sizes.smallScreen}px) {
    padding: 0px 8px 0 8px;
  }

  > a:first-child {
    border-radius: ${sizes.borderRadius}px;
    display: block;
  }
`

export const StyledCollection = styled(Item)`
  position: relative;
`

export const CollectionNameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  position: relative;
  top: -13px;
  background-color: ${colors.white};
  border-bottom-left-radius: ${sizes.radius}px;
  border-bottom-right-radius: ${sizes.radius}px;
`

export const OpacityMask = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: transparent;
  opacity: 0.4;
  z-index: 2;
  &:hover {
    background-color: ${colors.white};
  }
`

export const CollectionName = styled.span`
  font-size: ${sizes.text}px;
  color: ${colors.black};
  text-align: center;
  max-width: 146px;
  font-weight: ${fontWeights.bold};
  @media (min-width: ${sizes.sScreen}px) {
    font-size: 18px;
    max-width: 160px;
  }
  @media (min-width: ${sizes.xlScreen}px) {
    font-size: 20px;
    max-width: 180px;
  }
`

export const Cover = styled.div`
  width: 100%;
  border: 1px solid ${colors.gray1};
  height: auto;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-top-left-radius: ${sizes.radius}px;
  border-top-right-radius: ${sizes.radius}px;
  max-height: 270px;
  > img {
    position: relative;
    left: -25%;
    width: 150%;
    vertical-align: top;
  }
`
