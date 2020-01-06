import styled from 'styled-components'
import { colors, fontWeights, sizes } from 'config/ui'
import {
  TitleRecommendedFor,
  ContainerTags,
  TagStyle
} from '../ShelfItemDetails.style'

export const StyledDidacticCard = styled.div`
  padding-right: 16px;
  width: 312px;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 280px;
  }
`

export const Cover = styled.a`
  width: 312px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  border: 1px solid ${colors.black2};
  border-top: 7px solid
    ${props => (props.platform === 'arvore' ? colors.primary : colors.idGreen)};
  padding: 16px;
  box-shadow: 0 2px 15px 0 rgba(83, 101, 111, 0.18);
  min-height: 184px;
  height: auto;
  display: inline-block;

  @media (max-width: ${sizes.mdScreen}px) {
    width: 280px;
  }
`

export const HeaderCardStyle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const TitleStyle = styled.h2`
  max-width: 220px;
  font-size: 16px;
  color: ${colors.black6};
  margin-bottom: 8px;
  margin-top: 8px;
  line-height: 1.75;
  font-weight: ${fontWeights.regular};
`

export const ImageStyle = styled.img`
  width: 39px;
  height: 39px;
`

export const GenreStyle = styled.p`
  color: ${colors.black4};
  line-height: 1.25;
  font-size: 13px;
  margin: 0;
  margin-bottom: 16px;
`

export const TitleRecommendedForStyle = styled(TitleRecommendedFor)`
  margin: 0;
  font-size: 13px;
  line-height: 1.25;
  margin-bottom: 8px;
`

export const ContainerTagsStyle = styled(ContainerTags)``

export const TagStyleCustom = styled(TagStyle)`
  margin-bottom: 0px;
`
