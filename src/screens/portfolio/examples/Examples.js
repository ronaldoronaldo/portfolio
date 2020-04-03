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

import GithubHeatmap from 'components/portfolio/GithubHeatmap/GithubHeatmap'
import arvore from 'components/portfolio/GithubHeatmap/arvore'
import ComponentsAccordion from 'components/portfolio/components-accordion/ComponentsAccordion'

const Examples = () => {
  const [components, setComponents] = useState([
    {
      title: 'Github Commit Map',
      content: <GithubHeatmap data={arvore}/>,
      show: false
    },
    {
      title: 'The Shelf',
      content: <GithubHeatmap data={arvore}/>,
      show: false
    },
    {
      title: 'Drop PDF zone',
      content: <GithubHeatmap data={arvore}/>,
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
      const {title, show, content} = component
      return (
        <ComponentsAccordion title={title} open={show} onClose={() => onCloseAccordion(index)}>
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
