import styled from 'styled-components'
import { sizes, colors, fontWeights } from 'config/ui'
import { Link } from 'react-router-dom'

export const Item = styled.div`
  position: relative;
  padding: 0 !important;
  padding-right: 16px !important;
  height: auto;
`

export const StyledCollection = styled(Item)`
  position: relative;
`

export const CollectionNameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 100%;
  background-color: ${colors.white};
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
  color: ${colors.black5};
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
  height: auto;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: ${sizes.radius}px;
  max-height: 270px;
  > img {
    position: relative;
    width: 150%;
    vertical-align: top;
  }
`
