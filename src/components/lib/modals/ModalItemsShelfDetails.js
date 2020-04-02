import React, { useState, useEffect } from 'react'
import ItemShelfDetails from 'components/shelf-itens/ItemShelfDetails'
import {
  Container,
  BackgroundContainerTop,
  ImageGetColor
} from './ModalItemsShelfDetails.styles'
import { IconButtonClose } from './ModalItemsShelfDetails.styles'
import ColorThief from 'colorthief/dist/color-thief'

const ModalItemsShelfDetails = ({ item, type, active, onClose, openNewModal }) => {
  const [background, setBackground] = useState(null)

  useEffect(() => {
    const colorThief = new ColorThief()
    const img = new Image()
    img.addEventListener('load', function() {
      const result = colorThief.getColor(img)
      setBackground(result)
    })
    const googleProxyURL =
      'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url='
    img.crossOrigin = 'Anonymous'
    img.src = googleProxyURL + encodeURIComponent(item.image)
    return () => setBackground(null)
  }, [item])

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = 'visible')
  }, [])

  return (
    <Container show={active} onClose={onClose}>
      <IconButtonClose iconName="cancel" onClick={onClose} />

      <BackgroundContainerTop
        background={
          background && {
            r: background[0],
            g: background[1],
            b: background[2]
          }
        }
      >
        <ImageGetColor src={item.image} crossorigin="anonymous" />
      </BackgroundContainerTop>
      <ItemShelfDetails item={item} type={type} openNewModal={openNewModal} onClose={onClose} />
    </Container>
  )
}

export default ModalItemsShelfDetails
