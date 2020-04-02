import React, { useState } from 'react'
import {
  Container,
  Logo,
  ContainerMenu,
  ContainerItemMenu,
  MenuMobile,
  ItemMenu,
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
import {LOGIN_PATH, ROOT_PATH} from 'routes'
import { FontIcon } from 'components/lib/icons'
import { Link } from 'react-router-dom'

const Header = props => {
  const [userDropdown, setUserDropdown] = useState(false)
  const [platformDropdown, setPlatformsDropdown] = useState(false)
  const [platformDropdownMobile, setPlatformsDropdownMobile] = useState(false)
  return (
    <Container {...props}>
      <Logo href="">
        <img
          src={LogoArvoreEducacao}
          alt="Arvore educação"
        />
      </Logo>
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
                  text="Go to league page"
                  imagePath={symbolGutenNews}
                  type="img-left-text-left"
                  onClick={() => window.location.replace('/app/liga')}
                />
                <Item
                  text="Go to league vacation"
                  imagePath={symbolGutenNews}
                  type="img-left-text-left"
                  onClick={() => window.location.replace('/app/liga/ferias')}
                />
                <Item
                  text="Go to library page"
                  imagePath={symbolArvoreLivros}
                  type="img-left-text-left"
                  onClick={() => window.location.replace('/app/biblioteca')}
                />
                <Item
                  text="Back to portfolio"
                  imagePath={symbolEducacao}
                  type="img-left-text-left"
                  onClick={() => window.location.replace('/app/biblioteca')}
                />
                <Item
                  text="Disabled button example"
                  imagePath={symbolGutenNews}
                  type="img-left-text-left"
                  disabled
                />
              </DropdownEnd>
          </PlatformsDropdownContainer>
        )}
        <RoundButtonStyled
          style={{
            marginRight: 8
          }}
          iconName="bell"
          numberOfNotifications="10"
          onClick={() => console.log('news')}
          bgColor={colors.white}
          borderColor={colors.white}
          iconColor={colors.blue3}
        />
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
                to={LOGIN_PATH}
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
                iconName="eye"
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
                  text="Go to league page"
                  imagePath={symbolGutenNews}
                  type="img-left-text-left"
                  onClick={() => window.location.replace('/app/liga')}
                />
                <Item
                  text="Go to league vacation"
                  imagePath={symbolGutenNews}
                  type="img-left-text-left"
                  onClick={() => window.location.replace('/app/liga/ferias')}
                />
                <Item
                  text="Go to library page"
                  imagePath={symbolArvoreLivros}
                  type="img-left-text-left"
                  onClick={() => window.location.replace('/app/biblioteca')}
                />
                <Item
                  text="Back to portfolio"
                  imagePath={symbolEducacao}
                  type="img-left-text-left"
                  onClick={() => window.location.replace('/app/biblioteca')}
                />
                <Item
                  text="Disabled button example"
                  imagePath={symbolGutenNews}
                  type="img-left-text-left"
                  disabled
                />
              </DropdownEnd>
            </PlatformsDropdownContainer>
            <OverlayWrapper showOverlay={true} />
          </>
        )}
        <ContainerItemMenu>
          <ItemMenu as={Link} to={LOGIN_PATH}>
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
