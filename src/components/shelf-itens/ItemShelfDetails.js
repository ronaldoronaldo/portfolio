import React, { useState, useEffect } from 'react'

import {
  WrapperStyle,
  Container,
  LeftContainer,
  BookInfoStyle,
  TitleRecommendedFor,
  Mask,
  CoverStyle,
  TagStyle,
  ContainerTags,
  RightContainer,
  TitleStyle,
  DescriptionStyle,
  ArvoreButtonStyle,
  ContainerMobile,
  ContainerBorderStyle,
  ViewMore,
  ContainerButtonMobile
} from './ItemShelfDetails.style'
import { ItemsShelf } from 'components/shelf'
import SpinnerLoader from 'components/loader'
import { colors } from 'config/ui'

import LogoGuten from 'assets/images/logo-guten-white.svg'
import LogoArvore from 'assets/images/logo-arvore.svg'
import MaskBook from 'assets/images/mask_book.png'

import { redirectToPlatform } from 'utils/redirects'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'

import { PLATFORM } from 'config/vars'

import { getRecommendations } from 'api/queries'
import { sizes } from 'config/ui'

import { readMore } from 'utils/readMore.js'
import { format, parseISO } from 'date-fns'

const ShelfItemDetails = ({
  item,
  loading,
  setShowShelfItemDetails,
  type,
  client,
  ...props
}) => {
  const [recommendations, setRecommendations] = useState([])
  const [loadingRecommendations, setLoadingRecommendations] = useState(true)
  const [loadingRedirect, setLoadingRedirect] = useState(false)
  const [descriptionSize, setDescriptionSize] = useState(430)
  const isBook = type === 'book'

  const handleGetRecommendations = () => {
    const [arvore, guten] = PLATFORM
    const categoryIds = item.data && item.data.categoryIds
    const term = item.data && item.data.title

    if (categoryIds && term) {
      client
        .query({
          query: getRecommendations,
          variables: {
            categoryIds,
            term,
            platform: isBook ? arvore : guten,
            limit: 10
          }
        })
        .then(res => {
          setRecommendations(res.data.recommendations)
          setLoadingRecommendations(false)
        })
        .catch(err => {})
    }
  }

  useEffect(() => {
    setRecommendations([])
    handleGetRecommendations()
  }, [item])

  const handleRead = () => {
    setLoadingRedirect(true)

    if (isBook) {
      redirectToPlatform('reader', item.data.link)
    } else {
      redirectToPlatform('guten', item.data.link)
    }
  }

  if (!item.data) {
    return <SpinnerLoader />
  }

  if (props.modal.loading) {
    return <SpinnerLoader />
  }

  const handleReadMore = () => {
    if (descriptionSize) {
      setDescriptionSize(0)
    } else {
      setDescriptionSize(430)
    }
  }

  const renderCover = () => {
    return (
      <CoverStyle isBook={isBook}>
        {isBook && <Mask src={MaskBook} />}
        <img src={item.data.image} className="cover" />
      </CoverStyle>
    )
  }

  const renderBookInfo = () => {
    return (
      <>
        <BookInfoStyle>
          <span>{isBook ? 'Autor' : 'Matéria'}: </span>
          {isBook ? item.data.author : item.data.id}
        </BookInfoStyle>
        <BookInfoStyle>
          <span>{isBook ? 'Editora' : 'Editoria'}: </span>
          {isBook ? item.data.publisher : item.data.editorial}
        </BookInfoStyle>
        <BookInfoStyle>
          <span>Publicado em: </span>
          {format(parseISO(item.data.publishedAt), 'dd/MM/yyyy')}
        </BookInfoStyle>
        {item.data.degrees.length > 0 && (
          <>
            <TitleRecommendedFor>Recomendado para: </TitleRecommendedFor>
            <ContainerTags>
              {item.data.degrees.map(item => (
                <TagStyle text={item} key={item} noIcon />
              ))}
            </ContainerTags>
          </>
        )}
      </>
    )
  }

  const renderBookDescription = () => {
    return (
      <>
        <TitleStyle text={item.data.title} size={3} sizeMobile={5} />
        <DescriptionStyle>
          {readMore(item.data.description, descriptionSize)}
          {item.data.description.length > descriptionSize && (
            <ViewMore onClick={handleReadMore}>
              {descriptionSize ? 'Ver mais' : 'Ver menos'}
            </ViewMore>
          )}
        </DescriptionStyle>
      </>
    )
  }

  const renderItemsShelf = () => {
    return (
      <>
        {isBook && (
          <ItemsShelf
            settings={{
              slidesToScroll: 2,
              slidesToShow: 2.8,
              responsive: [
                {
                  breakpoint: sizes.mdScreen,
                  settings: {
                    arrows: false,
                    slidesToScroll: 1,
                    slidesToShow: 1.7
                  }
                }
              ]
            }}
            newsShelf
            title="Você também pode gostar:"
            style={{ marginBottom: 0 }}
            data={recommendations}
            loading={loadingRecommendations}
          />
        )}
        {!isBook && (
          <ItemsShelf
            settings={{
              slidesToScroll: 4,
              slidesToShow: 4.2,
              responsive: [
                {
                  breakpoint: sizes.lgScreen,
                  settings: {
                    arrows: false,
                    slidesToScroll: 3,
                    slidesToShow: 3.6
                  }
                }
              ]
            }}
            booksShelf
            title="Você também pode gostar:"
            style={{ marginBottom: 0 }}
            data={recommendations}
            loading={loadingRecommendations}
          />
        )}
      </>
    )
  }

  return (
    item.data && (
      <>
        <Container>
          <WrapperStyle recommendations={recommendations.length}>
            <LeftContainer>
              {renderCover()}
              {renderBookInfo()}
            </LeftContainer>
            <RightContainer>
              {renderBookDescription()}
              <ArvoreButtonStyle
                text={isBook ? 'Leia agora na' : 'Leia agora no'}
                iconImgSrc={isBook ? LogoArvore : LogoGuten}
                loading={loadingRedirect}
                isBook={isBook}
                color={colors.white}
                textColorHover={colors.white}
                onClick={handleRead}
                bgColor={isBook ? colors.primary : colors.idGreen}
                bgColorHover={
                  isBook ? colors.primaryLight : colors.idGreenLight
                }
              />
            </RightContainer>
          </WrapperStyle>
          {renderItemsShelf()}
        </Container>

        <ContainerMobile>
          {renderCover()}
          <ContainerBorderStyle>{renderBookDescription()}</ContainerBorderStyle>
          <ContainerBorderStyle>{renderBookInfo()}</ContainerBorderStyle>
          {renderItemsShelf()}
          <ContainerButtonMobile>
            <ArvoreButtonStyle
              text={isBook ? 'Leia agora na' : 'Leia agora no'}
              iconImgSrc={isBook ? LogoArvore : LogoGuten}
              loading={loadingRedirect}
              color={colors.white}
              isBook={isBook}
              textColorHover={colors.white}
              onClick={handleRead}
              bgColor={isBook ? colors.primary : colors.idGreen}
              bgColorHover={isBook ? colors.primaryLight : colors.idGreenLight}
            />
          </ContainerButtonMobile>
        </ContainerMobile>
      </>
    )
  )
}

const mapStateToProps = state => ({
  modal: state.modal
})

export default connect(mapStateToProps)(withApollo(ShelfItemDetails))
