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
  IconBox
} from './WrapperPortfolio.style'
import IconButton from 'components/lib/buttons/IconButton'
import {
  CURRICULUM_PATH,
  ABOUT_ME_PATH,
  EXAMPLES_PATH,
  PORTFOLIO_PATH
} from 'routes'

const WrapperPortfolio = props => {
  const [selectedPage, setSelectedPage] = useState('')
  const [removeLogo, setRemoveLogo] = useState(false)
  const [showPageContent, setShowPageContent] = useState(false)
  const body = document.body

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

  useEffect(() => {
    body.setAttribute('class', '')
    body.classList.add('introduction')
    return () => {
      body.setAttribute('class', '')
    }
  }, [])

  const handleIconClicked = (page, pagePath) => {
    if (selectedPage === '') {
      setSelectedPage(page)
      setShowPageContent(true)
      changeBackgroundColor(page)
      setTimeout(() => {
        setRemoveLogo(true)
      }, 500)
      setTimeout(() => {
        props.history.push(pagePath)
      }, 1500)
      return
    }
    changeBackgroundColor(page)
    setSelectedPage(page)
    setShowPageContent(true)
    props.history.push(pagePath)
  }

  return (
    <Page selectedPage={selectedPage}>
      {!removeLogo && <LogoImage src={logo} selectedPage={selectedPage} />}

      <IconsContainer selectedPage={selectedPage}>
        <IconBox selectedPage={selectedPage}>
          <IconButton
            iconName={'clipboard-content'}
            onClick={() => handleIconClicked('curriculum', CURRICULUM_PATH)}
          />
        </IconBox>
        <IconBox selectedPage={selectedPage}>
          <IconButton
            iconName={'user'}
            onClick={() => handleIconClicked('about-me', ABOUT_ME_PATH)}
          />
        </IconBox>
        <IconBox selectedPage={selectedPage}>
          <IconButton
            iconName={'browser-code'}
            onClick={() => handleIconClicked('examples', EXAMPLES_PATH)}
          />
        </IconBox>
      </IconsContainer>
      <IconsBorder selectedPage={selectedPage} />
      <PageContent showPageContent={showPageContent}>
        <Switch>{routeComponents}</Switch>
      </PageContent>
    </Page>
  )
}

export default WrapperPortfolio
