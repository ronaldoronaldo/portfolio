import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Curriculum } from './curriculum'
import { AboutMe } from './about-me'
import { Examples } from './examples'
import logo from 'assets/images/rw-logo.png'
import {
  Page,
  IconsContainer,
  LogoImage,
  IconsBorder,
  PageContent,
} from './WrapperPortfolio.style'
import IconButton from 'components/lib/buttons/IconButton'
import {
  CURRICULUM_PATH,
  ABOUT_ME_PATH,
  EXAMPLES_PATH,
  PORTFOLIO_PATH
} from 'routes'

export const shortAnimation = 0.5

const WrapperPortfolio = props => {
  const [iconsBorderAnimationDelay, setIconsBorderAnimationDelay] = useState(shortAnimation*2)
  const [pageContentAnimationDelay, setPageContentAnimationDelay] = useState(shortAnimation*3)
  const [selectedPage, setSelectedPage] = useState('')
  const [removeLogo, setRemoveLogo] = useState(false)
  const [showPageContent, setShowPageContent] = useState(false)
  const body = document.body

  useEffect(() => {
    body.setAttribute('class', '')
    body.classList.add('introduction')
    return () => {
      body.setAttribute('class', '')
    }
  }, [])

  const routes = [
    {
      path: PORTFOLIO_PATH,
      component: () => {
        return <div />
      }
    },
    { path: CURRICULUM_PATH, component: Curriculum },
    { path: ABOUT_ME_PATH, component: AboutMe },
    { path: EXAMPLES_PATH, component: Examples }
  ]

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ))

  const changeBackgroundColor = page => {
    body.setAttribute('class', '')
    body.classList.add(page)
  }

  const introductionAnimation = (page, pagePath) => {
    setSelectedPage(page)
    setShowPageContent(true)
    changeBackgroundColor(page)
    setTimeout(() => {
      setRemoveLogo(true)
    }, shortAnimation*1000)
    setTimeout(() => {
      setPageContentAnimationDelay(0)
      setIconsBorderAnimationDelay(shortAnimation)
      props.history.push(pagePath)
    }, shortAnimation*3000)
  }

  const handleIconClicked = (page, pagePath) => {
    if (selectedPage === '') {
      introductionAnimation(page, pagePath)
      return
    }
    changePageAnimation(page, pagePath)
  }

  const changePageAnimation = (page, pagePath) => {
    setPageContentAnimationDelay(0)
    setIconsBorderAnimationDelay(shortAnimation)
    setShowPageContent(false)
    setTimeout(() => {
      changeBackgroundColor(page)
      setSelectedPage(page)
    }, shortAnimation*1000)
    setTimeout(() => {
      props.history.push(pagePath)
      setShowPageContent(true)
    }, shortAnimation*3000)

  }

  return (
    <Page selectedPage={selectedPage}>
      {!removeLogo && <LogoImage src={logo} selectedPage={selectedPage} />}
      <IconsContainer selectedPage={selectedPage} animationDelay={shortAnimation}>
        <IconButton
          iconName={'clipboard-content'}
          onClick={() => handleIconClicked('curriculum', CURRICULUM_PATH)}
        />
        <IconButton
          iconName={'user'}
          onClick={() => handleIconClicked('about-me', ABOUT_ME_PATH)}
        />
        <IconButton
          iconName={'browser-code'}
          onClick={() => handleIconClicked('examples', EXAMPLES_PATH)}
        />
      </IconsContainer>
      <IconsBorder selectedPage={selectedPage} animationDelay={iconsBorderAnimationDelay} />
      <PageContent showPageContent={showPageContent} animationDelay={pageContentAnimationDelay}>
        <Switch>{routeComponents}</Switch>
      </PageContent>
    </Page>
  )
}

export default WrapperPortfolio
