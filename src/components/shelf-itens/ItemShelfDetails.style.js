import styled from 'styled-components'
import { colors, fontWeights, sizes } from 'config/ui'
import Tag from 'components/admin/user-management-panel/tags'
import { IconButton } from 'components/lib/buttons'
import Title from 'components/lib/titles/Title'

export const WrapperStyle = styled.div`
  display: flex;
  padding-bottom: 32px;
  border-bottom: ${props =>
    props.recommendations ? `1px solid ${colors.black2}` : 'none'};
  margin-bottom: 32px;
`

export const Container = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 32px;
  @media (max-width: ${sizes.mdScreen}px) {
    display: none;
  }
`

export const ContainerMobile = styled(Container)`
  display: none;

  @media (max-width: ${sizes.mdScreen}px) {
    display: block;
    top: 0;
    margin-top: 19px;
  }

  @media (max-width: ${sizes.smScreen}px) {
    padding: 32px 0px 32px 16px;
    max-width: 480px;
  }
`

export const ContainerBorderStyle = styled.div`
  border-bottom: 1px solid ${colors.black2};
  margin-bottom: 32px;
  margin-right: 16px;
`

export const LeftContainer = styled.div`
  width: 382px;

  @media (max-width: ${sizes.smScreen}px) {
    width: 100%;
    padding: 0 16px;
  }
`

export const BookInfoStyle = styled.p`
  span {
    font-weight: ${fontWeights.bold};
  }

  color: ${colors.black5};
  font-weight: ${fontWeights.regular};
  font-size: 16px;
  margin-bottom: 4px;
  margin-top: 0px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-right: 16px;
  }
`

export const TitleRecommendedFor = styled.h3`
  color: ${colors.purple3};
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 24px;
  line-height: 28px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-top: 16px;
    margin-bottom: 0;
  }
`

export const CoverStyle = styled.div`
  width: 100%;
  text-align: center;
  padding-right: 50px;
  position: relative;

  > img {
    width: ${props => (props.isBook ? 186 : 272)}px;
    height: ${props => (props.isBook ? 280 : 163)}px;
    margin-bottom: 44px;
    text-align: center;
    border-radius: ${props => (props.isBook ? '1px 10px 10px 1px' : '10px')};
  }

  @media (max-width: ${sizes.mdScreen}px) {
    padding-right: 0;

    > img {
      width: ${props => (props.isBook ? 124 : 245)}px;
      height: ${props => (props.isBook ? 187 : 147)}px;
      margin-bottom: 32px;
      margin-right: 16px;
      margin-top: ${props => (props.isBook ? -50 : 0)}px;
    }
  }
`

export const Mask = styled.img`
  position: absolute;
  width: 100%;
  z-index: 2;
  max-width: 152px;
`

export const ContainerTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 260px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-bottom: 32px;
  }
`

export const TagStyle = styled(Tag)`
  margin: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  padding: 6px 16px;
`

export const RightContainer = styled.div`
  width: 403px;
`

export const TitleStyle = styled(Title)`
  text-align: left;
  margin-bottom: 12px;
  margin-top: 80px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-top: 0;
    padding-right: 16px;
  }
`

export const DescriptionStyle = styled.p`
  color: ${colors.black5};
  line-height: 1.75;
  margin-bottom: 32px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-bottom: 26px;
    padding-right: 16px;
    max-width: 480px;
  }
`

export const ViewMore = styled.a`
  cursor: pointer;
  color: ${colors.black5};
  font-weight: ${fontWeights.semiBold};
  display: inline-block;
  white-space: nowrap;
`

export const ArvoreButtonStyle = styled(IconButton)`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  > img {
    width: ${props => (props.isBook ? 86 : 113)}px;
    margin-top: ${props => (props.isBook ? 0 : 2)}px;
    margin-left: 8px;
  }

  @media (max-width: ${sizes.mdScreen}px) {
    max-width: 480px;
  }
`

export const ContainerButtonMobile = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.black2};
  background: ${colors.white};
  padding: 0 16px;
`
