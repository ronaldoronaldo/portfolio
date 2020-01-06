import React, { useState } from 'react'
import { Container, Header } from './Sidebar.styles'
import { FontIcon } from 'components/lib/icons'
import SidebarMenu from 'components/admin/user-management-panel/sidebar-menu'
import logo from 'front-end/images/icon-arvore.svg'
import { Transition } from 'react-transition-group'
import { ARVORE_URL } from 'config/vars'

const Sidebar = ({ props }) => {
  const [minimize, setMinimize] = useState(false)

  const duration = 100

  const defaultStyle = {
    marginLeft: 0,
    transition: `margin-left ${duration}ms linear`
  }

  const transitionStyles = {
    entering: { marginLeft: -90 },
    entered: { marginLeft: -178 },
    exiting: { marginLeft: -90 },
    exited: { marginLeft: 0 }
  }

  const handleCallBackPlatform = () => {
    const platform = localStorage.getItem('platform')
    if (platform) {
      if (platform === 'arvore') {
        global.location = `${ARVORE_URL}/biblioteca/admin`
      }
    }

    localStorage.removeItem('platform')
  }

  return (
    <Transition in={minimize} timeout={duration}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          <Container minimize={minimize}>
            <Header minimize={minimize}>
              <img src={logo} />
              <FontIcon
                iconName="caret-left"
                size={8}
                sizeMobile={8}
                color="#595a5c"
                onClick={() => setMinimize(!minimize)}
              />
            </Header>
            <button onClick={handleCallBackPlatform}>
              <FontIcon
                iconName="arrow-left"
                size={18}
                sizeMobile={24}
                color="#a97ed1"
              />
              {!minimize && 'Voltar'}
            </button>
            <SidebarMenu minimize={minimize} props={props} />
          </Container>
        </div>
      )}
    </Transition>
  )
}

export default Sidebar
