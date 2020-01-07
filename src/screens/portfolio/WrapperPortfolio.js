import React, { useState } from 'react'
import { Curriculum } from './curriculum'
import { AboutMe } from './about-me'
import { Examples } from './examples'
import logo from 'assets/images/rw-logo.png'


import { Page, IconsContainer, LogoImage } from './WrapperPortfolio.style'
import IconButton from 'components/lib/buttons/IconButton'

const WrapperPortfolio = () => {
  const [selectedPage, setSelectedPage] = useState('')
  const [forIcons, setForIcons] = useState('')
  const [forPage, setForPage] = useState('')

  const handleIconClicked = page => {
    if (selectedPage === '') {
      setSelectedPage(page)
      setTimeout(() => {
        setForIcons(page)
        setForPage(page)
      }, 400)
      return
    }
    setSelectedPage(page)
    setForPage(page)
    setForIcons(page)
  }

  return (
    <Page selectedPage={forPage}>
      <LogoImage src={logo} selectedPage={selectedPage}/>

      <IconsContainer selectedPage={forIcons}>
        <IconButton iconName={'clipboard-content'} onClick={() => handleIconClicked('curriculum')}/>
        <IconButton iconName={'user'} onClick={() => handleIconClicked('about me')}/>
        <IconButton iconName={'browser-code'} onClick={() => handleIconClicked('examples')}/>
        {/*<IconButton iconName={'computer-code'}/>*/}
        {/*<IconButton iconName={'devices'}/>*/}
      </IconsContainer>
      {selectedPage === 'curriculum' && <Curriculum/>}
      {selectedPage === 'about me' && <AboutMe/>}
      {selectedPage === 'examples' && <Examples/>}
    </Page>
  )
}

export default WrapperPortfolio
