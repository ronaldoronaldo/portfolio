import React from 'react'
import { ContainerActionStyle, IconButtonStyle } from './Table.style'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const ContainerActions = ({
  id,
  entry = false,
  edit = true,
  exclude = true,
  history,
  data,
  ...rest
}) => {
  const handleEdit = () => {
    history.push({
      pathname: `${history.location.pathname}/info/${id}`,
      state: {
        data: data
      }
    })
  }

  const handleDelete = () => {
    console.log('Ok')
  }

  const handleAccessItem = () => {
    console.log('Ok')
  }

  return (
    <ContainerActionStyle>
      {entry && (
        <IconButtonStyle
          iconName="send-in"
          onClick={handleAccessItem}
          iconSize={16}
        >
          Entrar
        </IconButtonStyle>
      )}
      {edit && (
        <IconButtonStyle iconName="pencil" iconSize={16} onClick={handleEdit}>
          Editar
        </IconButtonStyle>
      )}
      {exclude && (
        <IconButtonStyle iconName="trash" onClick={handleDelete} iconSize={16}>
          Excluir
        </IconButtonStyle>
      )}
    </ContainerActionStyle>
  )
}

ContainerActions.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default withRouter(ContainerActions)
