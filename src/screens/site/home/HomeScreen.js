import React, { useState } from 'react'
import { WrapperMenu, MenuItem, ContainerStyle } from './HomeScreen.style'

import { BooksAndNewsScreen } from 'components/site/books-and-news'
import { TeachingMaterialsScreen } from 'components/site/teaching-materials'

const HomeScreen = ({ client, ...props }) => {
  const [active, setActive] = useState(0)
  const [showScreen, setShowScreen] = useState('books')

  const menuItens = [
    { title: 'Books and News', show: 'books' },
    {
      title: 'Teaching Materials',
      show: 'materials',
      titleMobile: 'Teacher Area'
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
        />
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
