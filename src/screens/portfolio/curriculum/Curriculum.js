import React from 'react'
import {
  CurriculumContainer,
  LeftSide,
  RightSide,
  Role,
  Title,
  LeftSectionContainer,
  Info,
  InformationRow,
  Spacing,
  TitleDivision,
  ProfileText,
  ScreensImage,
  LampImage,
  NameSection,
  NameText,
  RightSectionContainer,
  ExperienceTitle,
  ExperienceText,
  ExperienceList,
  ExperienceListItem, EducationDescription
} from './Curriculum.style'
import lamp from 'assets/images/portfolio/lamp.png'
import screen from 'assets/images/portfolio/screens.png'

const arvoreExperiences = [
  'Árvore is an educational app, its like Netflix but with books instead of movies and it helps improving reading at schools in many different ways.',
  'Already did a lot since I got in Árvore, even huge platforms like the editors panel and the user management panel for schools.',
  'Also created many pages and components for web and mobile.',
  'Here we work with most recent technologies such as react native, react hooks, GraphQL and Styled Components.',
  'Certified front end tester with Jest and Enzyme.'
]

const inceresExperiences = [
  'Inceres develop systems and solutions for precision agriculture.',
  'I recreate the interface of existing projects and build the new ones from the design to the deployment.',
  'Deployed many features and projects working on back and front.',
  'I Built a complex module for soil sample grids generation.',
  'Member of a team that uses agile method, works with SCRUM, sprints, code review and provides daily feedback.',
  'Implemented a Health Check app to respond faster if modules go off, a special need for the system architecture',
  'Using technologies such as React, Angular, Flask, Django, ElasticSearch, OpenLayers and many others.'
]

const Curriculum = () => {
  return (
    <CurriculumContainer>
      <LeftSide>
        <NameSection>
          <LampImage src={lamp}/>
          <NameText>
            <Title>Rafael Weiss</Title>
            <Role>Front-end Developer</Role>
            <Role>UX UI Designer</Role>
          </NameText>
          <LampImage src={lamp} smallScreen/>
        </NameSection>
        <LeftSectionContainer>
          <InformationRow>
            <Info>
              Cellphone
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
          <ScreensImage src={screen}/>
        </LeftSectionContainer>


      </LeftSide>
      <RightSide>
        <RightSectionContainer>
          <Title>Experience</Title>
          <TitleDivision/>
          <ExperienceTitle>
            <ExperienceText>
              Front-end, Árvore Educação
            </ExperienceText>
            <ExperienceText>
              2019 - Present
            </ExperienceText>
          </ExperienceTitle>
          <ExperienceList>
            {arvoreExperiences.map(item => {
              return (
                <ExperienceListItem>
                  {item}
                </ExperienceListItem>
              )
            })}
          </ExperienceList>
          <ExperienceTitle>
            <ExperienceText>
              Fullstack, Inceres
            </ExperienceText>
            <ExperienceText>
              2017 - 2019
            </ExperienceText>
          </ExperienceTitle>
          <ExperienceList>
            {inceresExperiences.map(item => {
              return (
                <ExperienceListItem>
                  {item}
                </ExperienceListItem>
              )
            })}
          </ExperienceList>
          <ExperienceTitle>
            <ExperienceText>
              Front-end and Designer Freelancer
            </ExperienceText>
            <ExperienceText>
              2015 - 2017
            </ExperienceText>
          </ExperienceTitle>
          <ExperienceTitle style={{
            marginTop: 14
          }}>
            <ExperienceText>
              Intern Engineering Consultant, Setepla
            </ExperienceText>
            <ExperienceText>
              2014 - 2015
            </ExperienceText>
          </ExperienceTitle>
        </RightSectionContainer>
        <RightSectionContainer>
          <Title>Education</Title>
          <TitleDivision/>
          <ExperienceTitle>
            <ExperienceText>
              Self-Taught
            </ExperienceText>
            <ExperienceText>
              2012 - Present
            </ExperienceText>
          </ExperienceTitle>
          <EducationDescription>
            PUC-RIO, UDEMY, LYNDA, INTERNET
          </EducationDescription>
        </RightSectionContainer>
        <RightSectionContainer>
          <Title>Languages & Frameworks</Title>
          <TitleDivision/>
          {/*<LanguagesContainer>*/}
          {/*  <LeftSideLenguages>*/}
          {/*    */}
          {/*  </LeftSideLenguages>*/}
          {/*  <RightSideLenguages>*/}
          {/*    */}
          {/*  </RightSideLenguages>*/}
          {/*</LanguagesContainer>*/}
        </RightSectionContainer>
      </RightSide>
    </CurriculumContainer>
  )
}

export default Curriculum
