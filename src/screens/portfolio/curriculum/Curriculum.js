import React, { Fragment } from 'react'
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
  LanguagesRightColumn,
  NameTitle,
  NameRole
} from './Curriculum.style'
import lamp from 'assets/images/portfolio/lamp.png'
import screen from 'assets/images/portfolio/screens.png'
import { ExperienceMeter } from '../../../components/portfolio/experience-meter'

const AFExperiences = [
  'My job here is develop a new version for their main application, the coach dashboard.',
  'The platform is built to help coaches and trainers to get along and complete an exercise routine.',
  "I've developed new feature for the chat component, profile page, workouts section and many more.",
  'I have also spent a lot of time writing tests, unit and e2e tests using playwright react testing library.',
  'Another great part of my dedication is on code review, with a proper validation of the feature before it.'
]

const LoadExperiences = [
  "Here I'm working on the RFP Guide, which helps shippers decide who is the best carrier for them.",
  'In only 5 months I have delivered 4 Epics, created a documentation for Mixpanel events and refactored their API calls from redux to react-query.',
  'I have also changed the way we destruct properties in CSS for Styled Components',
  'Mainly languages are React, React-native and Styled Components.'
]

const TCExperiences = [
  'TradersClub is a social network based on sharing your trading ideas for the stock market.',
  'The teams in TC are divided by page, just like in Spotify.',
  'My team was responsible for the Stocks Wallet page, which contains the stocks you want to follow.',
  'I was the only Front-end developer on the team and managed to deliver incredible cool features.',
  'Complex interactions with charts updated in real time.',
  'Mainly languages are React, React-native and Styled Components.'
]

const ByneExperiences = [
  'Byne is a company focused in emergency communication, recently purchased by RTM.',
  'Here I am hired to guide they in a new path to web development.',
  'Our first MVP website is already been used by RTM employees and it helps by managing new hotline requests.',
  'In my first week I wrote a front-end guide at Confluence, describing my stack and the main responsibilities we should know when coding React, CSS and other topics.',
  "In the meantime, my weekends where dedicated to an App that I'm really proud of and looking forward to, it just got its MVP finished on new year's eve and I will soon be able to tell more about it in my resume."
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
  { label: 'React', level: 5 },
  { label: 'React Native', level: 5 },
  { label: 'Styled Comp.', level: 5 },
  { label: 'Hooks', level: 5 },
  { label: 'ES6', level: 5 },
  { label: 'GraphQL', level: 5 },
  { label: 'JavaScript', level: 5 },
  { label: 'AngularJS', level: 5 },
  { label: 'Angular 2', level: 4 },
  { label: 'Angular 6', level: 4 },
  { label: 'Bootstrap', level: 4 },
  { label: 'OpenLayers', level: 3 },
  { label: 'Elastic S.', level: 2 }
]

const rightSideLanguages = [
  { label: 'HTML', level: 5 },
  { label: 'CSS', level: 5 },
  { label: 'Jest', level: 5 },
  { label: 'Playwright', level: 5 },
  { label: 'SASS', level: 5 },
  { label: 'Enzyme', level: 4 },
  { label: 'Python', level: 4 },
  { label: 'Karma', level: 3 },
  { label: 'JQuery', level: 3 },
  { label: 'Linux', level: 3 },
  { label: 'Xamarin', level: 3 },
  { label: 'C#', level: 2 }
]

const contactsInfo = [
  {
    label: 'Cellphone',
    info: '+55 32 999 711 797'
  },
  {
    label: 'E-mail',
    info: 'weissfrontend@gmail.com'
  },
  {
    label: 'linkedin',
    info: 'rafael-weiss-frontend'
  },
  {
    label: 'Address',
    info: 'Rio, RJ - Brazil'
  }
]

const Curriculum = () => {
  const renderTitle = text => {
    return (
      <Fragment>
        <Title>{text}</Title>
        <TitleDivision />
      </Fragment>
    )
  }

  const renderExperienceTitle = (where, when) => {
    return (
      <ExperienceTitle>
        <ExperienceText>{where}</ExperienceText>
        <ExperienceText>{when}</ExperienceText>
      </ExperienceTitle>
    )
  }

  const renderExperienceList = experienceList => {
    return (
      <ExperienceList>
        {experienceList.map((item, index) => {
          return <ExperienceListItem key={index}>{item}</ExperienceListItem>
        })}
      </ExperienceList>
    )
  }

  const renderContactsInfo = () => {
    return contactsInfo.map((contact, index) => {
      return (
        <InformationRow key={index}>
          <Info>{contact.label}</Info>
          <Info>{contact.info}</Info>
        </InformationRow>
      )
    })
  }

  return (
    <CurriculumContainer>
      <LeftSide>
        <NameSection>
          <LampImage src={lamp} />
          <NameText>
            <NameTitle>Rafael Weiss</NameTitle>
            <NameRole>Senior Frontend</NameRole>
            <NameRole>Web & Mobile</NameRole>
          </NameText>
        </NameSection>
        <LeftSectionContainer>
          {renderTitle('Professional Summary')}
          <ProfileText>
            Passionate and versatile Senior Front-End Engineer with over 7 years
            of experience in building and maintaining responsive websites and
            applications. Proven ability in leading teams, optimizing
            performance, and implementing new features from concept through
            completion. Known for a hands-on approach in using the latest
            technologies and frameworks, and a deep understanding of Agile
            methodologies. Equally comfortable working independently and
            collaborating within team settings. Demonstrated initiative in
            creating a full-fledged mobile application single-handedly,
            encompassing roles from design to development, and product
            management to marketing.
          </ProfileText>
          {/*<ScreensImage src={screen} />*/}
        </LeftSectionContainer>
      </LeftSide>
      <RightSide>
        <RightSectionContainer>
          {renderTitle('Experience')}
          {renderExperienceTitle(
            'Senior Front-end, Anytime Fitness',
            '05/2022 - Today'
          )}
          {renderExperienceList(AFExperiences)}
          {renderExperienceTitle(
            'Senior Front-end, Loadsmart',
            '03/2021 - 05/2022'
          )}
          {renderExperienceList(LoadExperiences)}
          {renderExperienceTitle(
            'Front-end Tech Lead, Byne',
            '08/2020 - 03/2021'
          )}
          {renderExperienceList(ByneExperiences)}
          {renderExperienceTitle(
            'Senior Front-end, TradersClub',
            '04/2020 - 08/2020'
          )}
          {renderExperienceList(TCExperiences)}
          {renderExperienceTitle(
            'Front-end, Árvore Educação',
            '2019 - 04/2020'
          )}
          {renderExperienceList(arvoreExperiences)}
          {renderExperienceTitle('Fullstack, Inceres', '2017 - 2019')}
          {renderExperienceList(inceresExperiences)}
          {renderExperienceTitle(
            'Front-end and Designer Freelancer',
            '2015 - 2017'
          )}
          {renderExperienceTitle(
            'Intern Engineering at Setepla',
            '2014 - 2015'
          )}
        </RightSectionContainer>
        <RightSectionContainer>
          {renderTitle('Education')}
          {renderExperienceTitle('Self-Taught', '2012 - Present')}
          {renderExperienceTitle('Self-Taught', '2012 - Present')}
          {renderExperienceTitle('Self-Taught', '2012 - Present')}
        </RightSectionContainer>
        {renderContactsInfo()}

        <RightSectionContainer>
          {renderTitle('Languages & Frameworks')}
          <LanguagesContainer>
            <LanguagesLeftColumn>
              {leftSideLanguages.map((item, index) => {
                return (
                  <ExperienceMeter
                    language={item.label}
                    level={item.level}
                    key={index}
                  />
                )
              })}
            </LanguagesLeftColumn>
            <LanguagesRightColumn>
              {rightSideLanguages.map((item, index) => {
                return (
                  <ExperienceMeter
                    language={item.label}
                    level={item.level}
                    key={index}
                  />
                )
              })}
            </LanguagesRightColumn>
          </LanguagesContainer>
        </RightSectionContainer>
      </RightSide>
    </CurriculumContainer>
  )
}

export default Curriculum
