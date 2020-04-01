import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { closeModal } from 'ducks/modal'
import ItemShelfDetails from 'components/shelf-itens/ItemShelfDetails'
import {
  Container,
  BackgroundContainerTop,
  ImageGetColor
} from './ModalItemsShelfDetails.styles'
import { IconButtonClose } from './ModalItemsShelfDetails.styles'
import ColorThief from 'colorthief/dist/color-thief'
import { ModalLoader } from 'components/loader'

const ModalItemsShelfDetails = ({ item, type, ...props }) => {
  const [background, setBackground] = useState(null)

  useEffect(() => {
    if (item && Object.keys(item).length) {
      const colorThief = new ColorThief()
      const img = new Image()
      img.addEventListener('load', function() {
        const result = colorThief.getColor(img)

        setBackground(result)
      })

      const googleProxyURL =
        'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url='
      img.crossOrigin = 'Anonymous'
      img.src = googleProxyURL + encodeURIComponent(item.data.image)
    }

    return () => setBackground(null)
  }, [item])

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = 'visible')
  }, [])

  const handleClose = () => {
    props.closeModal()
  }

  if (!item || !Object.keys(item).length || props.modal.loading) {
    return <ModalLoader />
  }

  return (
    <Container show={props.modal.isShowing} onClose={handleClose}>
      <IconButtonClose iconName="cancel" onClick={handleClose} />

      <BackgroundContainerTop
        background={
          background && {
            r: background[0],
            g: background[1],
            b: background[2]
          }
        }
      >
        <ImageGetColor src={item.data.image} crossorigin="anonymous" />
      </BackgroundContainerTop>
      <ItemShelfDetails item={item} type={type} />
    </Container>
  )
}

const mapStateToProps = state => ({
  modal: state.modal
})

export default connect(
  mapStateToProps,
  { closeModal }
)(ModalItemsShelfDetails)
