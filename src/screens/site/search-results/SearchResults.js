import React, {useEffect, useState} from 'react'
import {
  ContainerHeaderStyle,
  ContainerActionsStyle,
  IconButtonStyle,
  SubtitleStyle,
  ModalFilterStyle
} from './SearchResults.style'
import Title from 'components/lib/titles/Title'
import { ItemsShelf } from 'components/shelf'
import { Container } from 'components/lib/grid'
import { colors } from 'config/ui'

const SearchResults = props => {
  const [term, setTerm] = useState('')
  const [resultsNumber, setResultsNumber] = useState('')

  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    setTerm(props.match.params.term)
    setResultsNumber(54)
  }, [])

  const handleFilter = values => {
    console.log(values)
  }

  const checkboxes = [
    {
      title: 'Categorias',
      options: [
        "Ciencia e Tecnologia",
        "Ciencia e Tecnologia",
        "Ciencia e Tecnologia",
        "Ciencia e Tecnologia",
      ]
    },
    {
      title: 'Ano Escolar',
      options: [
        "1º ano",
        "2º ano",
        "3º ano",
        "4º ano",
      ]
    }
  ]

  return (
    <>
      {showFilter && (
        <ModalFilterStyle
          closeFilter={() => setShowFilter(false)}
          handleFilter={handleFilter}
          checkboxes={checkboxes}
          iconNext={true}
          title={'Filtrar por:'}
          handleFilterSubmit={handleFilter}
        />
      )}
      <Container>
        <ContainerHeaderStyle>
          <Title
            text={"Resultados da busca: " + term}
            textAlign="left"
            style={{ color: colors.blue, marginTop: 0, marginBottom: 0 }}
            size={4}
            sizeMobile={4}
          />
          <ContainerActionsStyle>
            <IconButtonStyle
              iconName="filter"
              text="Filtros"
              invertIconPosition
              color={colors.black4}
              onClick={() => setShowFilter(true)}
              bgColor={colors.primary}
            />
          </ContainerActionsStyle>
        </ContainerHeaderStyle>
        <SubtitleStyle>
          {resultsNumber} resultados obtidos
        </SubtitleStyle>
        <ItemsShelf
          slidesToShow={7.5}
          booksShelf
          title="Livros"
        />
        <ItemsShelf
          slidesToShow={4.7}
          newsShelf
          title="Notícias"
        />
        <ItemsShelf
          slidesToShow={3.8}
          didacticsShelf
          title="Materiais Pedagógicos"
        />
      </Container>
    </>
  )
}

export default SearchResults
