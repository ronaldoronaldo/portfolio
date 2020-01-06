import React from 'react'
import { HeaderTableStyle } from './Table.style'
import { FontIcon } from 'components/lib/icons'
import PropTypes from 'prop-types'

const HeaderTable = ({ title, active, onClick }) => {
  return (
    <HeaderTableStyle onClick={onClick} active={active}>
      <span>{title}</span>
      <div>
        <FontIcon
          iconName="code"
          size={5}
          style={{
            transform: `rotate(90deg)`
          }}
        />
      </div>
    </HeaderTableStyle>
  )
}

HeaderTable.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

export default HeaderTable
