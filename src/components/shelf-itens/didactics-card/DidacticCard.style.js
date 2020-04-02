import styled from 'styled-components'
import { colors, fontWeights, sizes, shadows } from 'config/ui'
import {
  TitleRecommendedFor,
  ContainerTags,
  TagStyle
} from '../ItemShelfDetails.style'

export const StyledDidacticCard = styled.div`
  padding-right: 16px;
  width: 312px;
  outline: none;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 280px;
    height: 170px;
  }
`

export const Cover = styled.a`
  background: ${colors.white};
  width: 312px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  padding: 16px;
  box-shadow: ${shadows.shadowDown6};
  min-height: 180px;
  height: auto;
  display: inline-block;
  overflow: hidden;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.05);
    box-shadow: none;
    position: relative;
    z-index: 3;

    h2 {
      color: ${props =>
        props.platform === 'arvore' ? colors.primary : colors.idGreen};
    }
  }

  @media (max-width: ${sizes.mdScreen}px) {
    width: 280px;
    height: 17px;
  }
`

export const LineColor = styled.div`
  width: 100%;
  height: 4px;
  background: ${props =>
    props.platform === 'arvore' ? colors.primary : colors.idGreen};
  position: absolute;
  left: 0;
  top: 0;
`

export const HeaderCardStyle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const TitleStyle = styled.h2`
  max-width: 220px;
  font-size: ${sizes.text}px;
  color: ${colors.black5};
  margin-bottom: 8px;
  margin-top: 0;
  line-height: 28px;
  font-weight: ${fontWeights.bold};
  transition: all 0.2s ease-in;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 54px;
`

export const ImageStyle = styled.img`
  width: 32px;
  height: 32px;
`

export const GenreStyle = styled.p`
  color: ${colors.black4};
  line-height: 16px;
  font-size: ${sizes.bodySmall}px;
  margin: 0;
  margin-bottom: 16px;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 18px;
`

export const TitleRecommendedForStyle = styled(TitleRecommendedFor)`
  margin: 0;
  line-height: 16px;
  font-size: ${sizes.bodySmall}px;
  margin-bottom: 8px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-bottom: 8px;
  }
`

export const ContainerTagsStyle = styled(ContainerTags)``

export const TagStyleCustom = styled(TagStyle)`
  margin-bottom: 6px;
`

export const ViewMore = styled.button`
  background: ${colors.black1};
  color: ${colors.black4};
  border-radius: 16px;
  padding: 0px 16px;
  border: none;
  font-size: 12px;
  height: 25px;
  cursor: pointer;
  position: relative;
`
