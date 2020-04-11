import React, {Fragment, useEffect} from 'react'
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
  ExperienceListItem,
  EducationDescription,
  LanguagesContainer,
  LanguagesLeftColumn,
  LanguagesRightColumn
} from './Curriculum.style'
import lamp from 'assets/images/portfolio/lamp.png'
import screen from 'assets/images/portfolio/screens.png'
import {ExperienceMeter} from "../../../components/portfolio/experience-meter"

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

const leftSideLanguages = [
  {label: 'React', level: 5},
  {label: 'React Native', level: 5},
  {label: 'Styled Comp.', level: 5},
  {label: 'ES6', level: 5},
  {label: 'GraphQL', level: 5},
  {label: 'JavaScript', level: 5},
  {label: 'AngularJS', level: 5},
  {label: 'Angular 2', level: 4},
  {label: 'Angular 6', level: 4},
  {label: 'Bootstrap', level: 4},
  {label: 'OpenLayers', level: 3},
  {label: 'Elastic S.', level: 2},
  {label: 'Flask', level: 2},
]

const rightSideLanguages = [
  {label: 'HTML', level: 5},
  {label: 'CSS', level: 5},
  {label: 'Jest', level: 5},
  {label: 'Enzyme', level: 5},
  {label: 'SASS', level: 5},
  {label: 'Python', level: 4},
  {label: 'Karma', level: 3},
  {label: 'mySQL', level: 3},
  {label: 'JQuery', level: 3},
  {label: 'Linux', level: 3},
  {label: 'Xamarin', level: 3},
  {label: 'C#', level: 2},
]

const contactsInfo = [
  {
    label: 'Cellphone',
    info: '+55 21 959 017 906'
  },
  {
    label: 'E-mail',
    info: 'dataweiss@gmail.com'
  },
  {
    label: 'Address',
    info: 'Muriaé, MG - Brasil'
  }
]

const Curriculum = props => {
  // const body = document.body
  //
  //
  // useEffect(() => {
  //   console.log('action', props.history.location.action)
  //   console.log('location', props.history.location)
  //   changeBackgroundColor('curriculum')
  // }, [])
  //
  // const changeBackgroundColor = page => {
  //   body.setAttribute('class', '')
  //   body.classList.add(page)
  // }

  const renderTitle = text => {
    return (
      <Fragment>
        <Title>{text}</Title>
        <TitleDivision/>
      </Fragment>
    )
  }

  const renderExperienceTitle = (where, when) => {
    return (
      <ExperienceTitle>
        <ExperienceText>
          {where}
        </ExperienceText>
        <ExperienceText>
          {when}
        </ExperienceText>
      </ExperienceTitle>
    )
  }

  const renderExperienceList = experienceList => {
    return (
      <ExperienceList>
        {experienceList.map(item => {
          return (
            <ExperienceListItem>
              {item}
            </ExperienceListItem>
          )
        })}
      </ExperienceList>
    )
  }

  const renderContactsInfo = () => {
    return contactsInfo.map(contact => {
      return (
        <InformationRow>
          <Info>
            {contact.label}
          </Info>
          <Info>
            {contact.info}
          </Info>
        </InformationRow>
      )
    })
  }

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
          {renderContactsInfo()}
          <Spacing/>
          {renderTitle('Profile')}
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
          {renderTitle('Experience')}
          {renderExperienceTitle('Front-end, Árvore Educação', '2019 - Present')}
          {renderExperienceList(arvoreExperiences)}
          {renderExperienceTitle('Fullstack, Inceres', '2017 - 2019')}
          {renderExperienceList(inceresExperiences)}
          {renderExperienceTitle('Front-end and Designer Freelancer', '2015 - 2017')}
          {renderExperienceTitle('Intern Engineering at Setepla', '2014 - 2015')}
        </RightSectionContainer>
        <RightSectionContainer>
          {renderTitle('Education')}
          {renderExperienceTitle('Self-Taught', '2012 - Present')}
          <EducationDescription>
            PUC-RIO, UDEMY, LYNDA, INTERNET
          </EducationDescription>
        </RightSectionContainer>
        <RightSectionContainer>
          {renderTitle('Languages & Frameworks')}
          <LanguagesContainer>
            <LanguagesLeftColumn>
              {leftSideLanguages.map(item => {
                return <ExperienceMeter language={item.label} level={item.level}/>
              })}
            </LanguagesLeftColumn>
            <LanguagesRightColumn>
              {rightSideLanguages.map(item => {
                return <ExperienceMeter language={item.label} level={item.level}/>
              })}
            </LanguagesRightColumn>
          </LanguagesContainer>
        </RightSectionContainer>
      </RightSide>
    </CurriculumContainer>
  )
}

export default Curriculum
