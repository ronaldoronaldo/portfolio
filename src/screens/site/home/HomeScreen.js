import React, { useState } from 'react'
import { WrapperMenu, MenuItem, ContainerStyle } from './HomeScreen.style'

import { BooksAndNewsScreen } from 'components/site/books-and-news'
import { TeachingMaterialsScreen } from 'components/site/teaching-materials'
import { ModalItemsShelfDetails } from 'components/lib/modals'

import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import { compose } from 'redux'

const HomeScreen = ({ client, ...props }) => {
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

const mapStateToProps = state => ({
  modal: state.modal
})

export default compose(
  withApollo,
  connect(mapStateToProps)
)(HomeScreen)
