import React, {useState, Fragment} from 'react'

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
import { colors } from 'config/ui'
import LogoGuten from 'assets/images/logo-guten-white.svg'
import LogoArvore from 'assets/images/logo-arvore.svg'
import MaskBook from 'assets/images/mask_book.png'
import { withApollo } from 'react-apollo'
import { sizes } from 'config/ui'
import { readMore } from 'utils/readMore.js'
import books from 'components/shelf/books'
import news from 'components/shelf/news.json'

const ShelfItemDetails = ({
  item,
  type,
  onClose
}) => {
  const [descriptionSize, setDescriptionSize] = useState(430)
  const isBook = type === 'book'

  const handleRead = () => {
    onClose()
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
        <img alt="" src={item.image} className="cover" />
      </CoverStyle>
    )
  }

  const renderBookInfo = () => {
    return (
      <Fragment>
        <BookInfoStyle>
          <span>{isBook ? 'Autor' : 'Matéria'}: </span>
          {isBook ? item.author : item.id}
        </BookInfoStyle>
        <BookInfoStyle>
          <span>{isBook ? 'Editora' : 'Editoria'}: </span>
          {isBook ? item.publisher : item.editorial}
        </BookInfoStyle>
        <BookInfoStyle>
          <span>Publicado em: </span>
          {item.publishedAt}
        </BookInfoStyle>
        {item.degrees.length > 0 && (
          <>
            <TitleRecommendedFor>Recomendado para: </TitleRecommendedFor>
            <ContainerTags>
              {item.degrees.map(item => (
                <TagStyle text={item} key={item} noIcon />
              ))}
            </ContainerTags>
          </>
        )}
      </Fragment>
    )
  }

  const renderBookDescription = () => {
    return (
      <>
        <TitleStyle text={item.title} size={3} sizeMobile={5} />
        <DescriptionStyle>
          {readMore(item.description, descriptionSize)}
          {item.description.length > descriptionSize && (
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
            data={news}
            loading={false}
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
            data={books}
            loading={false}
          />
        )}
      </>
    )
  }

  return (
    item && (
      <>
        <Container>
          <WrapperStyle recommendations={true}>
            <LeftContainer>
              {renderCover()}
              {renderBookInfo()}
            </LeftContainer>
            <RightContainer>
              {renderBookDescription()}
              <ArvoreButtonStyle
                text={isBook ? 'Leia agora na' : 'Leia agora no'}
                iconImgSrc={isBook ? LogoArvore : LogoGuten}
                loading={false}
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
              loading={false}
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

export default withApollo(ShelfItemDetails)
