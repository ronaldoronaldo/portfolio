import React, { useState, useEffect } from 'react'
import { WrapperMenu, MenuItem, ContainerStyle } from './HomeScreen.style'

import { BooksAndNewsScreen } from 'components/site/books-and-news'
import { TeachingMaterialsScreen } from 'components/site/teaching-materials'
import { ModalItemsShelfDetails } from 'components/lib/modals'

import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import { compose } from 'redux'
import { getHomeDataQuery } from 'api/queries'

const HomeScreen = ({ client, ...props }) => {
  const [active, setActive] = useState(0)
  const [showScreen, setShowScreen] = useState('books')
  const [data, setData] = useState(null)

  const isStudent = data && data.data.me.role === 'student'

  useEffect(() => {
    client
      .query({
        query: getHomeDataQuery
      })
      .then(res => {
        setData(res)
      })
      .catch(err => {})
  }, [])

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
      {!isStudent && <WrapperMenu>{renderMenuItens()}</WrapperMenu>}
      {showScreen === 'books' && <BooksAndNewsScreen />}
      {showScreen === 'materials' && <TeachingMaterialsScreen />}
      {props.modal.isShowing && (
        <ModalItemsShelfDetails
          item={props.modal.data}
          type={props.modal.data.type}
        />
      )}
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
