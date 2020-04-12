import React, { useState, useEffect } from 'react'
import {
  Menu,
  MenuDropdownItem,
  ContainerDropdownItens,
  MenuItem
} from './SidebarMenu.style'
import { FontIcon } from 'components/lib/icons'
import { Transition } from 'react-transition-group'
import { USER_MANAGEMENT_ROOT_PATH } from 'routes'

const SidebarMenu = ({ minimize }) => {
  const [open, setOpen] = useState(false)
  const [inProp, setInProp] = useState(true)

  useEffect(() => {
    minimize && setOpen(false)
  }, [minimize])

  const menuDropdownItens = [
    {
      id: 0,
      icon: 'school',
      text: 'Minha escola',
      menuItens: [
        { id: 0, name: 'Redes', path: USER_MANAGEMENT_ROOT_PATH + '/redes' },
        { id: 1, name: 'Marcas', path: USER_MANAGEMENT_ROOT_PATH + '/marcas' },
        {
          id: 2,
          name: 'Unitys',
          path: USER_MANAGEMENT_ROOT_PATH + '/unidades'
        },
        { id: 3, name: 'Classs', path: USER_MANAGEMENT_ROOT_PATH + '/turmas' }
      ]
    },
    {
      id: 1,
      icon: 'users',
      text: 'Usuários',
      menuItens: [
        { id: 0, name: 'Admin', path: USER_MANAGEMENT_ROOT_PATH + '/admin' },
        {
          id: 1,
          name: 'Diretores',
          path: USER_MANAGEMENT_ROOT_PATH + '/diretores'
        },
        {
          id: 0,
          name: 'Coordenadores',
          path: USER_MANAGEMENT_ROOT_PATH + '/coordenadores'
        },
        {
          id: 0,
          name: 'Professores',
          path: USER_MANAGEMENT_ROOT_PATH + '/professores'
        },
        { id: 0, name: 'Alunos', path: USER_MANAGEMENT_ROOT_PATH + '/alunos' },
        {
          id: 0,
          name: 'Funcionários',
          path: USER_MANAGEMENT_ROOT_PATH + '/funcionarios'
        },
        {
          id: 0,
          name: 'Bolsistas',
          path: USER_MANAGEMENT_ROOT_PATH + '/bolsistas'
        }
      ]
    },
    {
      id: 2,
      icon: 'money-circle',
      text: 'Financeiro'
    }
  ]

  const duration = 200

  const defaultStyle = !minimize && {
    transition: `max-height ${duration}ms linear, opacity ${duration}ms linear`,
    opacity: 0
  }

  const transitionStyles = !minimize && {
    entering: { opacity: 0.5, maxHeight: 250 },
    entered: { opacity: 1, maxHeight: 500 },
    exiting: { opacity: 0.5, maxHeight: 250 },
    exited: { opacity: 0, maxHeight: 0 }
  }

  const handleClick = (item, index) => {
    setOpen(item.id)
    setInProp(true)

    if (open === item.id) {
      setOpen(false)
      setInProp(false)
    }
  }

  const handleClickMenuItem = () => {
    if (minimize) {
      setOpen(false)
    }
  }

  const handleMouseEnter = item => {
    if (minimize) {
      setOpen(item.id)
      setInProp(true)
    }
  }

  const handleMouseLeave = () => {
    if (minimize) {
      setOpen(false)
      setInProp(true)
    }
  }

  const renderMenuItens = (item, index) => {
    return (
      item.menuItens && (
        <Transition in={open === item.id && inProp} timeout={duration}>
          {state => (
            <ContainerDropdownItens
              minimize={minimize}
              active={open === item.id}
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              {item.menuItens.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    to={item.path}
                    onClick={handleClickMenuItem}
                  >
                    {item.name}
                  </MenuItem>
                )
              })}
            </ContainerDropdownItens>
          )}
        </Transition>
      )
    )
  }

  const renderMenuDropdownItem = () => {
    return menuDropdownItens.map((item, index) => {
      return (
        <MenuDropdownItem
          active={open === item.id}
          minimize={minimize}
          iconSize={19}
          key={index}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={handleMouseLeave}
        >
          <a onClick={() => handleClick(item, index)}>
            <FontIcon
              iconName={item.icon}
              size={19}
              sizeMobile={22}
              color="#595a5c"
            />
            {!minimize && (
              <React.Fragment>
                <p>{item.text}</p>
                {item.menuItens && (
                  <FontIcon
                    iconName={open === item.id ? 'caret-up' : 'caret-down'}
                    size={8}
                    sizeMobile={20}
                    color="#595a5c"
                  />
                )}
              </React.Fragment>
            )}
          </a>
          {renderMenuItens(item, index)}
        </MenuDropdownItem>
      )
    })
  }

  return <Menu>{renderMenuDropdownItem()}</Menu>
}

export default SidebarMenu
