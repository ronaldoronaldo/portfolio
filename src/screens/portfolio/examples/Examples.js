import React, {useState} from 'react'
import {
  CardsSection,
  ComponentsSection,
  ExamplesContainer,
  ResponsiveScreens,
  SectionSubtitle,
  SectionTitle,
  ComponentsContainer
} from './Examples.style'
import ScreenCard from 'components/portfolio/screen-card/ScreenCard'
import loginMobile from 'assets/images/portfolio/pages/loginMobile.png'
import libraryMobile from 'assets/images/portfolio/pages/libraryMobile.png'
import leagueMobile from 'assets/images/portfolio/pages/leagueMobile.png'
import { LEAGUE_PATH, LOGIN_PATH, SITE_PATH } from 'routes'
import CollectionShelf from 'components/portfolio/collections-shelf/CollectionShelf'


import GithubHeatmap from 'components/portfolio/GithubHeatmap/GithubHeatmap'
import arvore from 'components/portfolio/GithubHeatmap/arvore'
import ComponentsAccordion from 'components/portfolio/components-accordion/ComponentsAccordion'
import {FileDropzone} from "../../../components/portfolio/file-dropzone"
const collections = [
  {
    name: 'Garotas no comando',
    image: 'girl_power',
    index: 1
  },
  {
    name: 'Bullying e autoaceitação',
    image: 'bullying',
    index: 2
  },
  {
    name: 'Meio ambiente',
    image: 'meio_ambiente',
    index: 3
  },
  {
    name: 'Livros premiados',
    image: 'premiados',
    index: 4
  },
  {
    name: 'Contos de fadas e maravilhosos',
    image: 'contos_de_fada',
    index: 5
  },
  {
    name: 'Viraram filme',
    image: 'filmes',
    index: 6
  },
  {
    name: 'Vida e Carreira',
    image: 'carreira',
    index: 7
  },
  {
    name: 'Cultura Geek',
    image: 'geek',
    index: 8
  },
  {
    name: 'Enem e Vestibular',
    image: 'vestibular_enem',
    index: 9
  }
]

const Examples = () => {
  const [components, setComponents] = useState([
    {
      title: 'Github Commit Map',
      content: <GithubHeatmap data={arvore}/>,
      show: false,
      column: true
    },
    {
      title: 'The Carousel',
      content: <CollectionShelf
        key="collections"
        title=""
        loading={false}
        data={collections}
      />,
      show: false,
      column: true
    },
    {
      title: 'PDF Drop Zone',
      content: <FileDropzone/>,
      show: false
    },
  ])


  const responsiveScreens = [
    {
      title: 'Login',
      image: loginMobile,
      numberOfPages: 6,
      path: LOGIN_PATH
    },
    {
      title: 'Library',
      image: libraryMobile,
      numberOfPages: 11,
      path: SITE_PATH
    },
    {
      title: 'League',
      image: leagueMobile,
      numberOfPages: 2,
      path: LEAGUE_PATH
    }
  ]

  const renderCards = cards => {
    return cards.map(card => {
      return <ScreenCard {...card} />
    })
  }

  const onCloseAccordion = index => {
    let tempArray = [...components]
    tempArray[index].show = !components[index].show
    setComponents(tempArray)
  }

  const renderComponents = () => {
    return components.map((component, index) => {
      const {title, show, content, column} = component
      return (
        <ComponentsAccordion column={column} title={title} open={show} onClose={() => onCloseAccordion(index)}>
          {content}
        </ComponentsAccordion>
      )
    })
  }

  return (
    <ExamplesContainer>
      <ResponsiveScreens>
        <SectionTitle>Responsive Screens</SectionTitle>
        <SectionSubtitle>
          Three different environments, each one with at least three pages where you can navigate between. Everything
          works in any screen size.
        </SectionSubtitle>
        <CardsSection>{renderCards(responsiveScreens)}</CardsSection>
      </ResponsiveScreens>
      <ComponentsSection>
        <SectionTitle>Components Examples</SectionTitle>
        <SectionSubtitle>
          Everything here in this website is fully handmade by me, every animation and functionality, with almost zero external libs used.
        </SectionSubtitle>
        <ComponentsContainer>
          {renderComponents()}
        </ComponentsContainer>
      </ComponentsSection>
    </ExamplesContainer>
  )
}

export default Examples
