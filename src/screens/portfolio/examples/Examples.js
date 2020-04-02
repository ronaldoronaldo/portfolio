import React from 'react'
import {
  CardsSection,
  ComponentsSection,
  DesktopScreens,
  ExamplesContainer,
  ResponsiveScreens,
  SectionTitle
} from './Examples.style'
import ScreenCard from 'components/portfolio/screen-card/ScreenCard'
import loginMobile from 'assets/images/portfolio/pages/loginMobile.png'
import libraryMobile from 'assets/images/portfolio/pages/libraryMobile.png'
import leagueMobile from 'assets/images/portfolio/pages/leagueMobile.png'
import {LEAGUE_PATH, LOGIN_PATH, SITE_PATH} from 'routes'

const responsiveScreens = [
  {
    title: 'login',
    image: loginMobile,
    numberOfPages: 6,
    path: LOGIN_PATH
  },
  {
    title: 'library',
    image: libraryMobile,
    numberOfPages: 11,
    path: SITE_PATH
  },
  {
    title: 'league',
    image: leagueMobile,
    numberOfPages: 2,
    path: LEAGUE_PATH
  }
]

const Examples = () => {

  const renderCards = cards => {
    return cards.map(card => {
      return <ScreenCard {...card}/>
    })
  }

  return (
    <ExamplesContainer>
      <ResponsiveScreens>
        <SectionTitle>Responsive Screens</SectionTitle>
        <CardsSection>
          {renderCards(responsiveScreens)}
        </CardsSection>
      </ResponsiveScreens>
      {/*<DesktopScreens>*/}
      {/*  <SectionTitle>Desktop Screens</SectionTitle>*/}

      {/*</DesktopScreens>*/}
      <ComponentsSection>
        <SectionTitle>Components Examples</SectionTitle>

      </ComponentsSection>
    </ExamplesContainer>
  )
}

export default Examples
