import React, { useState } from 'react'
import {
  Container,
  Logo,
  // WrapperInput,
  ContainerMenu,
  ContainerItemMenu,
  MenuMobile,
  ItemMenu,
  // ExpandableSearchInputStyle,
  UserDropdownContainer,
  PlatformsDropdownContainer,
  RoundButtonStyled,
  OverlayWrapper
} from './Header.style'
import iconArvore from 'assets/images/icon-arvore.svg'
import symbolArvoreLivros from 'assets/images/symbol-arvore.svg'
import symbolGutenNews from 'assets/images/symbol-guten.svg'
import symbolEducacao from 'assets/images/symbol-educacao.svg'
import { colors } from 'config/ui'
import LogoArvoreEducacao from 'assets/images/logo-arvore-edu-white.svg'
import { DropdownEnd, Item } from 'components/lib/dropdown'
import ClickOutside from 'utils/ClickOutside'
import { withRouter } from 'react-router-dom'
import { LOGOUT_PATH, ROOT_PATH } from 'routes'
import { redirectToPlatform } from 'utils/redirects'
import { FontIcon } from 'components/lib/icons'
import { Link } from 'react-router-dom'

const Header = props => {
  const [userDropdown, setUserDropdown] = useState(false)
  // const [searchValue, setSearchValue] = useState('')
  const [platformDropdown, setPlatformsDropdown] = useState(false)
  const [platformDropdownMobile, setPlatformsDropdownMobile] = useState(false)

  // const providerGoogleOrMicrosoft = localStorage.getItem('provider')

  // const onSearchChange = value => {
  //   setSearchValue(value)
  // }

  // const handleSearch = () => {
  //   props.history.push(`${SITE_SEARCH_PATH}/${searchValue}`)
  // }

  return (
    <Container {...props}>
      <Logo href="">
        <img
          src={LogoArvoreEducacao}
          alt="Arvore educação"
          fill={colors.white}
        />
      </Logo>
      {/* <WrapperInput>
        <ExpandableSearchInputStyle
          placeholder="Buscar por livros, notícias, autores…"
          iconSize={22}
          onChange={onSearchChange}
          value={searchValue}
          submitSearch={handleSearch}
        />
      </WrapperInput> */}
      <ContainerMenu>
        <ClickOutside onClickOutside={() => setPlatformsDropdown(false)}>
          <RoundButtonStyled
            style={{
              marginRight: 8
            }}
            img={iconArvore}
            onClick={() => setPlatformsDropdown(!platformDropdown)}
            borderColor={colors.white}
          />
        </ClickOutside>
        {platformDropdown && (
          <PlatformsDropdownContainer>
            <DropdownEnd>
              <Item
                text="Ir para a Árvore de Livros"
                imagePath={symbolArvoreLivros}
                type="img-left-text-left"
                onClick={() => redirectToPlatform('arvore')}
              />
              <Item
                text="Ir para o Guten News"
                imagePath={symbolGutenNews}
                type="img-left-text-left"
                onClick={() => redirectToPlatform('guten')}
              />
              <Item
                text="Explorador de acervo"
                imagePath={symbolEducacao}
                type="img-left-text-left"
                disabled
              />
            </DropdownEnd>
          </PlatformsDropdownContainer>
        )}
        {/* <RoundButtonStyled
          style={{
            marginRight: 8
          }}
          iconName="bell"
          numberOfNotifications="10"
          onClick={() => console.log('news')}
          bgColor={colors.blue}
          borderColor={colors.white}
          iconColor={colors.white}
        /> */}
        <ClickOutside onClickOutside={() => setUserDropdown(false)}>
          <RoundButtonStyled
            iconName="user"
            onClick={() => setUserDropdown(!userDropdown)}
            bgColor={colors.white}
            borderColor={colors.white}
            iconColor={colors.blue3}
          />
        </ClickOutside>
        {userDropdown && (
          <UserDropdownContainer>
            <DropdownEnd>
              {/* <Item text="Perfil" iconName="user" type="icon-left-text-left" /> */}
              <Item
                text="Sair"
                iconName="magazine"
                type="icon-left-text-left"
                to={LOGOUT_PATH}
                as={Link}
              />
            </DropdownEnd>
          </UserDropdownContainer>
        )}
      </ContainerMenu>
      <MenuMobile>
        <ContainerItemMenu>
          <ItemMenu as={Link} to={ROOT_PATH}>
            <FontIcon
              iconName="home"
              size={15}
              color={colors.black4}
              style={{ marginBottom: 4 }}
            />
            Início
          </ItemMenu>
        </ContainerItemMenu>
        <ClickOutside onClickOutside={() => setPlatformsDropdownMobile(false)}>
          <ContainerItemMenu>
            <ItemMenu
              onClick={() =>
                setPlatformsDropdownMobile(!platformDropdownMobile)
              }
            >
              <FontIcon
                iconName="Logo"
                size={15}
                color={colors.black4}
                style={{ marginBottom: 4 }}
              />
              Explorar
            </ItemMenu>
          </ContainerItemMenu>
        </ClickOutside>
        {platformDropdownMobile && (
          <>
            <PlatformsDropdownContainer>
              <DropdownEnd>
                <Item
                  text="Ir para a Árvore de Livros"
                  imagePath={symbolArvoreLivros}
                  type="img-left-text-left"
                  onClick={() => redirectToPlatform('arvore')}
                />
                <Item
                  text="Ir para o Guten News"
                  imagePath={symbolGutenNews}
                  type="img-left-text-left"
                  onClick={() => redirectToPlatform('guten')}
                />
                <Item
                  text="Explorador de acervo"
                  imagePath={symbolEducacao}
                  type="img-left-text-left"
                  disabled
                />
              </DropdownEnd>
            </PlatformsDropdownContainer>
            <OverlayWrapper showOverlay={true} />
          </>
        )}
        <ContainerItemMenu>
          <ItemMenu as={Link} to={LOGOUT_PATH}>
            <FontIcon
              iconName="magazine"
              size={15}
              color={colors.black4}
              style={{ marginBottom: 4 }}
            />
            Sair
          </ItemMenu>
        </ContainerItemMenu>
      </MenuMobile>
    </Container>
  )
}

export default withRouter(Header)
