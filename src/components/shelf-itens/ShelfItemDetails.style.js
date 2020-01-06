import styled from 'styled-components'
import { colors, fontWeights, sizes } from 'config/ui'
import { Header } from 'components/site/header'
import Tag from 'components/admin/user-management-panel/tags'
import { IconButton } from 'components/lib/buttons'
import Title from 'components/lib/titles/Title'

export const HeaderStyle = styled(Header)`
  margin-bottom: 56px;

  @media (max-width: ${sizes.mdScreen}px) {
    display: none;
  }
`

export const WrapperStyle = styled.div`
  display: flex;
  padding-bottom: 32px;
  border-bottom: 1px solid ${colors.black2};
  margin-bottom: 32px;
`

export const Container = styled.div`
  width: 100%;
  max-width: 841px;
  background: ${colors.white};
  border-radius: 10px;
  padding: 68px 56px 56px;
  overflow-y: auto;
  position: relative;

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
    padding: 32px 0px 16px 16px;
    max-width: 480px;
  }
`

export const ContainerBorderStyle = styled.div`
  border-bottom: 1px solid ${colors.black2};
  margin-bottom: 32px;
  margin-right: 16px;
`

export const LeftContainer = styled.div`
  width: 45%;
  max-width: 382px;

  @media (max-width: ${sizes.mdScreen}px) {
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
  margin-bottom: 16px;
  margin-top: 32px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-top: 16px;
    margin-bottom: 0;
  }
`

export const CoverStyle = styled.div`
  width: 100%;
  text-align: center;
  padding-right: 50px;

  > img {
    width: ${props => (props.isBook ? 186 : 272)}px;
    height: ${props => (props.isBook ? 280 : 163)}px;
    margin-bottom: 44px;
    text-align: center;
    border-radius: 10px;
  }

  @media (max-width: ${sizes.mdScreen}px) {
    padding-right: 0;

    > img {
      width: ${props => (props.isBook ? 124 : 245)}px;
      height: ${props => (props.isBook ? 187 : 147)}px;
      margin-bottom: 32px;
      margin-right: 16px;
      margin-top: ${props => (props.isBook ? 0 : 73)}px;
    }
  }
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
  width: 55%;
  max-width: 403px;
`
export const IconButtonClose = styled(IconButton)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 34px;
  right: 34px;

  > span {
    font-size: 11px;
    color: ${colors.black6};
  }

  @media (max-width: ${sizes.mdScreen}px) {
    top: 24px;
    right: 24px;
  }
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
  margin-bottom: 60px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-bottom: 26px;
    padding-right: 16px;
  }
`

export const ArvoreButtonStyle = styled(IconButton)`
  width: 100%;
  height: 48px;

  @media (max-width: ${sizes.mdScreen}px) {
    margin-top: 45px;
  }
`
