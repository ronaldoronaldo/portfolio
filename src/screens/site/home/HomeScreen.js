import React, { useState } from 'react'
import { WrapperMenu, MenuItem, ContainerStyle } from './HomeScreen.style'

import { BooksAndNewsScreen } from 'screens/site/books-and-news'
import { TeachingMaterialsScreen } from 'screens/site/teaching-materials'

const HomeScreen = props => {
  const [active, setActive] = useState(0)
  const [showScreen, setShowScreen] = useState('books')

  const menuItens = [
    { title: 'Livros e Notícias', show: 'books' },
    {
      title: 'Materiais Pedagógicos',
      show: 'materials',
      titleMobile: 'Para o professor'
    }
  ]

  const handleClick = (item, index) => {
    setShowScreen(item.show)
    setActive(index)
  }

  const renderMenuItens = () => {
    return menuItens.map((item, index) => {
      return (
        <MenuItem
          active={index === active}
          onClick={() => handleClick(item, index)}
          key={index}
          title={item.title}
          titleMobile={item.titleMobile}
        ></MenuItem>
      )
    })
  }

  return (
    <ContainerStyle>
      <WrapperMenu>{renderMenuItens()}</WrapperMenu>
      {showScreen === 'books' && <BooksAndNewsScreen />}
      {showScreen === 'materials' && <TeachingMaterialsScreen />}
    </ContainerStyle>
  )
}

export default HomeScreen
