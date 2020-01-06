import React, { useState } from 'react'
import {
  Container,
  Logo,
  WrapperInput,
  ContainerMenu,
  ExpandableSearchInputStyle,
  UserDropdownContainer,
  PlatformsDropdownContainer,
  DropdownStyled
} from './Header.style'
import RoundButton from 'components/admin/user-management-panel/round-button/RoundButton'
import iconArvore from 'assets/images/icon-arvore.svg'
import { colors } from 'config/ui'
import LogoArvoreEducacao from 'assets/images/logo-arvore-edu-white.svg'
import { Dropdown } from 'components/lib/dropdown'
import ClickOutside from 'utils/ClickOutside'
import { withRouter } from 'react-router-dom'
import { SITE_SEARCH_RESULTS_PATH, LOGOUT_PATH } from 'routes'
import { redirectToPlatform } from 'utils/redirects'

const Header = props => {
  const [userDropdown, setUserDropdown] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [platformDropdown, setPlatformsDropdown] = useState(false)

  const userDropdownItems = [
    {
      text: 'Área do Professor',
      onClick: () => console.log(''),
      icon: 'user'
    },
    {
      text: 'Alterar a senha',
      onClick: () => console.log(''),
      icon: 'bookmark',
      iconSizeCompensation: -1
    },
    {
      text: 'Sair',
      onClick: () => props.history.push(LOGOUT_PATH),
      icon: 'user'
    }
  ]

  const platformsDropdownItems = [
    {
      text: 'Ir para a Árvore de Livros',
      onClick: () => redirectToPlatform('arvore'),
      icon: 'book'
    },
    {
      text: 'Ir para o Guten News',
      onClick: () => redirectToPlatform('guten'),
      icon: 'newspaper'
    },
    {
      text: 'Explorador de acervo',
      onClick: () => console.log(''),
      icon: 'star',
      itemDisabled: true
    }
  ]

  const onSearchChange = value => {
    setSearchValue(value)
  }

  const handleSearch = () => {
    props.history.push(SITE_SEARCH_RESULTS_PATH(searchValue))
  }

  return (
    <Container {...props}>
      <Logo href="">
        <img
          src={LogoArvoreEducacao}
          alt="Arvore educação"
          fill={colors.white}
        />
      </Logo>
      <WrapperInput>
        <ExpandableSearchInputStyle
          open
          placeholder="Buscar por livros, notícias, autores…"
          iconSize={22}
          onChange={onSearchChange}
          value={searchValue}
          submitSearch={handleSearch}
        />
      </WrapperInput>
      <ContainerMenu>
        <ClickOutside onClickOutside={() => setPlatformsDropdown(false)}>
          <RoundButton
            style={{
              marginRight: 8
            }}
            img={iconArvore}
            onClick={() => setPlatformsDropdown(!platformDropdown)}
            borderColor={colors.white}
          />
        </ClickOutside>
        <PlatformsDropdownContainer>
          <Dropdown
            items={platformsDropdownItems}
            active={platformDropdown}
            onChange={() => console.log('item click')}
            closeDropdown={() => setPlatformsDropdown(false)}
            style={{
              borderRadius: 5,
              maxHeight: 800
            }}
          />
        </PlatformsDropdownContainer>
        <RoundButton
          style={{
            marginRight: 8
          }}
          iconName="bell"
          numberOfNotifications="10"
          onClick={() => console.log('news')}
          bgColor={colors.blue}
          borderColor={colors.white}
          iconColor={colors.white}
        />
        <ClickOutside onClickOutside={() => setUserDropdown(false)}>
          <RoundButton
            iconName="user"
            onClick={() => setUserDropdown(!userDropdown)}
            bgColor={colors.blue}
            borderColor={colors.white}
            iconColor={colors.white}
          />
        </ClickOutside>
        <UserDropdownContainer>
          <DropdownStyled
            items={userDropdownItems}
            active={userDropdown}
            onChange={() => console.log('item click')}
            closeDropdown={() => setUserDropdown(false)}
            style={{
              borderRadius: 5,
              maxHeight: 800
            }}
          />
        </UserDropdownContainer>
      </ContainerMenu>
    </Container>
  )
}

export default withRouter(Header)
