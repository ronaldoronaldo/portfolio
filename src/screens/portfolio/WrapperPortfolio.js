import React, { useEffect, useState } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'

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
  const [unlock1, setUnlock1] = useState('')
  const [unlock2, setUnlock2] = useState('')
  const [unlock3, setUnlock3] = useState(true)
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
      setTimeout(() => {
        changeBackgroundColor(page)
        setUnlock1(page)
      }, 500)
      setTimeout(() => {
        setUnlock2(page)
      }, 1000)
      setTimeout(() => {
        setUnlock3(true)
        props.history.push(pagePath)
      }, 1500)
      return
    }
    changeBackgroundColor(page)
    setSelectedPage(page)
    setUnlock1(page)
    setUnlock2(page)
    setUnlock3(true)
    props.history.push(pagePath)
  }

  return (
    <Page selectedPage={selectedPage}>
      {unlock1 === '' && <LogoImage src={logo} selectedPage={selectedPage} />}

      <IconsContainer selectedPage={unlock1}>
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
      <IconsBorder selectedPage={unlock2} />
      <PageContent unlock3={unlock3}>
        <Switch>{routeComponents}</Switch>
      </PageContent>
    </Page>
  )
}

export default WrapperPortfolio
