import React, { useState } from 'react'
import { AccordionMenuContainer, IconButtonStyle } from './AccordionMenu.style'

const AccordionMenu = props => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <IconButtonStyle
        iconName={open ? 'caret-down' : 'caret-right'}
        text={props.text}
        color="#595A5C"
        iconSize={15}
        onClick={() => setOpen(!open)}
        open={open}
        haveBorderBottom={props.haveBorderBottom}
      />

      <AccordionMenuContainer open={open}>
        {props.children}
      </AccordionMenuContainer>
    </>
  )
}

export default AccordionMenu
