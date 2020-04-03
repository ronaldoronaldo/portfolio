import React from 'react'
import {
  CardsSection,
  ComponentsSection,
  ExamplesContainer,
  ResponsiveScreens,
  SectionSubtitle,
  SectionTitle
} from './Examples.style'
import ScreenCard from 'components/portfolio/screen-card/ScreenCard'
import loginMobile from 'assets/images/portfolio/pages/loginMobile.png'
import libraryMobile from 'assets/images/portfolio/pages/libraryMobile.png'
import leagueMobile from 'assets/images/portfolio/pages/leagueMobile.png'
import { LEAGUE_PATH, LOGIN_PATH, SITE_PATH } from 'routes'

const Examples = () => {
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
    console.log(cards)
    return cards.map(card => {
      return <ScreenCard {...card} />
    })
  }

  return (
    <ExamplesContainer>
      <ResponsiveScreens>
        <SectionTitle>Responsive Screens</SectionTitle>
        <SectionSubtitle>
          3 different environments, each one with at least 3 pages, everything
          works in any screen size.
        </SectionSubtitle>
        <CardsSection>{renderCards(responsiveScreens)}</CardsSection>
      </ResponsiveScreens>
      <ComponentsSection>
        <SectionTitle>Components Examples</SectionTitle>
      </ComponentsSection>
    </ExamplesContainer>
  )
}

export default Examples
