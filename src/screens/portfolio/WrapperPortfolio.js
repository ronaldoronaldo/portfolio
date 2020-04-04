import React, { useState } from 'react'
import { Curriculum } from './curriculum'
import { AboutMe } from './about-me'
import { Examples } from './examples'
import logo from 'assets/images/rw-logo.png'
import {
  Page,
  IconsContainer,
  LogoImage, IconsBorder,
  PageContent, IconBox
} from './WrapperPortfolio.style'
import IconButton from 'components/lib/buttons/IconButton'

const WrapperPortfolio = () => {
  const [selectedPage, setSelectedPage] = useState('')
  const [unlock1, setUnlock1] = useState('')
  const [unlock2, setUnlock2] = useState('')
  const [unlock3, setUnlock3] = useState(false)
  const body = document.body

  const changeBackgroundColor = page => {
    body.setAttribute("class", "")
    body.classList.add(page)
  }

  const handleIconClicked = page => {
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
      }, 1500)
      return
    }
    changeBackgroundColor(page)
    setSelectedPage(page)
    setUnlock1(page)
    setUnlock2(page)
    setUnlock3(true)
  }

  return (
    <Page>
      {unlock1 === '' && <LogoImage src={logo} selectedPage={selectedPage}/>}

      <IconsContainer selectedPage={unlock1}>
        <IconBox selectedPage={selectedPage}>
          <IconButton iconName={'clipboard-content'} onClick={() => handleIconClicked('curriculum')}/>
        </IconBox>
        <IconBox selectedPage={selectedPage}>
          <IconButton iconName={'user'} onClick={() => handleIconClicked('about-me')}/>
        </IconBox>
        <IconBox selectedPage={selectedPage}>
          <IconButton iconName={'browser-code'} onClick={() => handleIconClicked('examples')}/>
        </IconBox>
          {/*<IconButton iconName={'clipboard-content'} onClick={() => handleIconClicked('curriculum')}/>*/}
          {/*<IconButton iconName={'user'} onClick={() => handleIconClicked('about-me')}/>*/}
          {/*<IconButton iconName={'browser-code'} onClick={() => handleIconClicked('examples')}/>*/}
      </IconsContainer>
      <IconsBorder selectedPage={unlock2}/>
      <PageContent unlock3={unlock3}>
        {selectedPage === 'curriculum' && <Curriculum/>}
        {selectedPage === 'about-me' && <AboutMe/>}
        {selectedPage === 'examples' && <Examples/>}
      </PageContent>
    </Page>
  )
}

export default WrapperPortfolio
