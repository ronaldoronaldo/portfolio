import React from 'react'
import {CurriculumContainer, LeftSide, RightSide, Role, StyledImage, Title, LeftSectionContainer, Info, InformationRow, Spacing, TitleDivision, ProfileText} from './Curriculum.style'
import lamp from 'assets/images/portfolio/lamp.png'


const Curriculum = () => {
  return (
    <CurriculumContainer>
      <LeftSide>
        <StyledImage src={lamp}/>
        <Title>Rafael Weiss</Title>
        <Role>Front-end Developer</Role>
        <Role>UX UI Designer</Role>
        <LeftSectionContainer>
          <InformationRow>
            <Info>
              Telefone
            </Info>
            <Info>
              +55 21 959 017 906
            </Info>
          </InformationRow>
          <InformationRow>
            <Info>
              E-mail
            </Info>
            <Info>
              dataweiss@gmail.com
            </Info>
          </InformationRow>
          <InformationRow>
            <Info>
              Address
            </Info>
            <Info>
              Muriaé, MG - Brasil
            </Info>
          </InformationRow>
          <Spacing/>
        </LeftSectionContainer>
        <LeftSectionContainer>
          <Title>Profile</Title>
          <TitleDivision/>
          <ProfileText>
            A fullstack web developer with a strong
            interest in projects that require both
            conceptual and analytical thinking. Son
            of a great designer, I'm fully-committed
            to designing and developing innovative
            web based materials that users will
            love. Always eager to learn more from
            anyone, regardless of the industry,
            language or framework.
          </ProfileText>
        </LeftSectionContainer>


      </LeftSide>
      <RightSide>

      </RightSide>
    </CurriculumContainer>
  )
}

export default Curriculum
