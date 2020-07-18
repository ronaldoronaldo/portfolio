import React, {Fragment} from 'react'
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

const TCExperiences = [
  'TradersClub is a social network based on sharing your trading ideas for the stock market.',
  'The teams in TC are divided by page, just like in Spotify.',
  'My team is responsible for the Stocks Wallet page, which is the page that contains the stocks you want to follow.',
  'I am the only Front-end developer on the team and managed to deliver incredible cool features, many times going beyond the expectations of the P.O. himself.',
  'Working with charts in real time to show the price changing for each stock on the wallet simultaneously.',
  'Mainly languages are React, React-native and Styled Components.'
]

const arvoreExperiences = [
  'Árvore is an educational app, its like Netflix but with books instead of movies and it helps improving reading at schools in many different ways.',
  'Did a lot in Árvore, such as huge platforms like the editors panel and the user management panel for schools.',
  'Also created many pages and components for web and mobile.',
  'Here I worked with most recent technologies such as react native, react hooks, GraphQL and Styled Components.',
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

const Curriculum = () => {
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
        {experienceList.map((item, index) => {
          return (
            <ExperienceListItem key={index}>
              {item}
            </ExperienceListItem>
          )
        })}
      </ExperienceList>
    )
  }

  const renderContactsInfo = () => {
    return contactsInfo.map((contact,index) => {
      return (
        <InformationRow key={index}>
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
          {renderExperienceTitle('Front-end, TradersClub', '2020 - Present')}
          {renderExperienceList(TCExperiences)}
          {renderExperienceTitle('Front-end, Árvore Educação', '2019 - 2020')}
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
              {leftSideLanguages.map((item, index) => {
                return <ExperienceMeter language={item.label} level={item.level} key={index}/>
              })}
            </LanguagesLeftColumn>
            <LanguagesRightColumn>
              {rightSideLanguages.map((item, index) => {
                return <ExperienceMeter language={item.label} level={item.level} key={index}/>
              })}
            </LanguagesRightColumn>
          </LanguagesContainer>
        </RightSectionContainer>
      </RightSide>
    </CurriculumContainer>
  )
}

export default Curriculum
