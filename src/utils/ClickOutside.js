import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const ClickOutside = ({ onClickOutside, children, ...rest }) => {
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const outsideRef = useRef()

  const handleClickOutside = event => {
    if (outsideRef && !outsideRef.current.contains(event.target)) {
      onClickOutside()
    }
  }

  return (
    <div ref={outsideRef} {...rest}>
      {children}
    </div>
  )
}

ClickOutside.propTypes = {
  children: PropTypes.element.isRequired,
  onClickOutside: PropTypes.func.isRequired
}

export default ClickOutside
