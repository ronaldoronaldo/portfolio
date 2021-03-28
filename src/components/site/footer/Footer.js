import React from 'react'
import {
  Container,
  ContainerGrid,
  FooterCopyright,
  ButtonFooter,
  ContainerButtonFooter
} from './Footer.styles'

const Footer = () => {
  return (
    <Container>
      <ContainerGrid>
        <FooterCopyright>
          Copyright ©️ 2020 Árvore Educação. Todos os direitos reservados.
        </FooterCopyright>
        <ContainerButtonFooter>
          <ButtonFooter
            href="https://www2.arvoredelivros.com.br/privacidade"
            target="_blank"
          >
            Política de privacidade
          </ButtonFooter>
          <ButtonFooter
            href="https://www2.arvoredelivros.com.br/direitos-autorais"
            target="_blank"
          >
            Termos de uso
          </ButtonFooter>
          <ButtonFooter
            href="http://faq.arvoredelivros.com.br/pt-BR/"
            target="_blank"
          >
            Ajuda
          </ButtonFooter>
        </ContainerButtonFooter>
      </ContainerGrid>
    </Container>
  )
}

export default Footer
