import React from 'react'

import {
  HeaderStyle,
  WrapperStyle,
  Container,
  LeftContainer,
  BookInfoStyle,
  TitleRecommendedFor,
  CoverStyle,
  TagStyle,
  ContainerTags,
  RightContainer,
  TitleStyle,
  DescriptionStyle,
  ArvoreButtonStyle,
  IconButtonClose,
  ContainerMobile,
  ContainerBorderStyle
} from './ShelfItemDetails.style'
import { ItemsShelf } from 'components/shelf'

import { colors } from 'config/ui'

const ShelfItemDetails = ({
  item,
  setShowShelfItemDetails,
  type,
  ...props
}) => {
  const isBook = type === 'book'

  return (
    <>
      <HeaderStyle />
      <Container>
        <WrapperStyle>
          <LeftContainer>
            <CoverStyle isBook={isBook}>
              <img src={isBook ? item.imageUrlIntermediaria : item.image} />
            </CoverStyle>
            <BookInfoStyle>
              <span>{isBook ? 'Autor' : 'Matéria'}: </span>
              {isBook ? item.author : '123'}
            </BookInfoStyle>
            <BookInfoStyle>
              <span>{isBook ? 'Editora' : 'Editoria'}: </span>Clássicos da
              literatura
            </BookInfoStyle>
            <BookInfoStyle>
              <span>Publicado em: </span>2014
            </BookInfoStyle>
            <TitleRecommendedFor>Recomendado para: </TitleRecommendedFor>
            <ContainerTags>
              <TagStyle text={'1º ano'} noIcon />
              <TagStyle text={'2º ano'} noIcon />
              <TagStyle text={'3º ano'} noIcon />
            </ContainerTags>
          </LeftContainer>
          <RightContainer>
            <IconButtonClose
              iconName="cancel"
              onClick={() => setShowShelfItemDetails(false)}
            />
            <TitleStyle
              text={isBook ? item.name : item.title}
              size={3}
              sizeMobile={3}
            />
            <DescriptionStyle>
              {isBook ? item.description : item.subtitle_text}
            </DescriptionStyle>
            <ArvoreButtonStyle
              text={isBook ? 'Leia Agora na Árvore' : 'Leia Agora na Guten'}
              color={colors.white}
              textColorHover={colors.white}
              onClick={() => console.log('Ok')}
              bgColor={isBook ? colors.primary : colors.idGreen}
              bgColorHover={isBook ? colors.primaryLight : colors.idGreenLight}
            />
          </RightContainer>
        </WrapperStyle>
        {isBook && (
          <ItemsShelf
            slidesToShow={2.8}
            newsShelf
            title="Você também pode gostar:"
            style={{ marginBottom: 0 }}
          />
        )}
        {!isBook && (
          <ItemsShelf
            slidesToShow={4.3}
            booksShelf
            title="Você também pode gostar:"
            style={{ marginBottom: 0 }}
          />
        )}
      </Container>

      <ContainerMobile>
        <IconButtonClose
          iconName="cancel"
          onClick={() => setShowShelfItemDetails(false)}
        />
        <CoverStyle isBook={isBook}>
          <img src={isBook ? item.imageUrlIntermediaria : item.image} />
        </CoverStyle>
        <ContainerBorderStyle>
          <TitleStyle
            text={isBook ? item.name : item.title}
            size={3}
            sizeMobile={5}
          />
          <DescriptionStyle>
            {isBook ? item.description : item.subtitle_text}
          </DescriptionStyle>
        </ContainerBorderStyle>
        <ContainerBorderStyle>
          <BookInfoStyle>
            <span>{isBook ? 'Autor' : 'Matéria'}: </span>
            {isBook ? item.author : '123'}
          </BookInfoStyle>
          <BookInfoStyle>
            <span>{isBook ? 'Editora' : 'Editoria'}: </span>Clássicos da
            literatura
          </BookInfoStyle>
          <BookInfoStyle>
            <span>Publicado em: </span>2014
          </BookInfoStyle>
          <TitleRecommendedFor>Recomendado para: </TitleRecommendedFor>
          <ContainerTags>
            <TagStyle text={'1º ano'} noIcon />
            <TagStyle text={'2º ano'} noIcon />
            <TagStyle text={'3º ano'} noIcon />
          </ContainerTags>
        </ContainerBorderStyle>
        {isBook && (
          <ItemsShelf
            slidesToShow={2.8}
            newsShelf
            title="Você também pode gostar:"
            style={{ marginBottom: 0 }}
          />
        )}
        {!isBook && (
          <ItemsShelf
            slidesToShow={4.3}
            booksShelf
            title="Você também pode gostar:"
            style={{ marginBottom: 0 }}
          />
        )}
        <div style={{ marginRight: 16 }}>
          <ArvoreButtonStyle
            text={isBook ? 'Leia Agora na Árvore' : 'Leia Agora na Guten'}
            color={colors.white}
            textColorHover={colors.white}
            onClick={() => console.log('Ok')}
            bgColor={isBook ? colors.primary : colors.idGreen}
            bgColorHover={isBook ? colors.primaryLight : colors.idGreenLight}
          />
        </div>
      </ContainerMobile>
    </>
  )
}

export default ShelfItemDetails
