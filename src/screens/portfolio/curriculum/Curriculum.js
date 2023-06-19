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
  NameRole,
  ContactsSection,
  Contacts,
  Education,
  Language
} from './Curriculum.style'
import lamp from 'assets/images/portfolio/lamp.png'
import screen from 'assets/images/portfolio/screens.png'
import { ExperienceMeter } from '../../../components/portfolio/experience-meter'
import { sizes } from '../../../config/ui'

const KipExperiences = [
  'Single-handedly conceptualized, designed, and developed a full-featured mobile app using Expo.',
  'Managed product and marketing strategies, positioning the app effectively in its target market.',
  'Oversaw the entire product lifecycle from inception to deployment, acting as the sole developer, designer, and product manager.',
  'The app, while no longer running, showcased a comprehensive set of features, demonstrated at kipkart.com.br',
  'Technologies used: React Native, Styled Components, Expo, Python, GraphQL.'
]

const PodopoloExperiences = [
  'Pioneered the creation of new login and onboarding pages for mobile, enhancing user experience, and increasing conversion rates.',
  'Optimized waveform rendering on the clip screen, effectively reducing load times for larger episodes, a significant performance upgrade valued by the company.',
  'Led a team of 3 Front-End developers, improving team synergy and code quality through regular code reviews and one-on-one mentoring.',
  'Demonstrated initiative in upgrading the Storybook documentation to its latest version, improving team efficiency and consistency in UI component development.',
  'Technologies used: React, React Native, Styled Components, Storybook, Figma, React Hooks, Jira, SCRUM.'
]

const AFExperiences = [
  'Delivered a comprehensive range of tasks, including the creation of new features and refactoring of the existing codebase, driving continuous improvement in functionality and user experience.',
  'Regularly performed unit and end-to-end testing to validate code quality and functionality, ensuring the delivery of robust, high-performing applications.',
  'Optimized codebase for improved performance and readability, reducing load times and enhancing the user experience.',
  'Conducted regular code reviews to maintain high coding standards and adherence to best practices.',
  'Contributed to the development and implementation of agile methodologies, improving team productivity and project delivery timelines.',
  'Technologies used: React, React Hooks, Bootstrap, Figma, Jira, SCRUM.'
]

const LoadExperiences = [
  'Led the development of the highly valued RFP Guide, a tool assisting shippers in carrier selection, recognized for its impact on business operations.',
  'Established documentation for Mixpanel events, ensuring accurate and consistent tracking of user interactions and system events, leading to improved product decision-making.',
  'Introduced a shift from Redux to React-query for API calls, enhancing data fetching efficiency and application responsiveness.',
  'Technologies used: React, React Hooks, Styled Components, Figma, Jira, SCRUM.'
]

const ByneExperiences = [
  'Played a pivotal role in reorienting the company towards modern web development standards, significantly enhancing website performance and user engagement.',
  'Composed a comprehensive front-end guide at Confluence, establishing a robust knowledge base and promoting best coding practices within the team.',
  'Led a team of 4 developers, fostering a culture of collaboration, continual learning, and high-quality code.',
  'Technologies used: React, React Hooks, Styled Components, Figma, Jira, SCRUM.'
]

const TCExperiences = [
  'Developed a real-time interactive charting interface for the Stocks Wallet page, a core feature of the platform that serviced over 700,000 users.',
  'Introduced several code optimization strategies and testing methodologies, which resulted in improved application performance and reliability.',
  'Technologies used: React, React-native, Styled Components, Figma, Jira, SCRUM.'
]

const arvoreExperiences = [
  "Developed several integral platforms including the editor's panel and user management panel for schools, designed with a mobile-first approach and delivering optimal performance across devices of all sizes.",
  "Ensured every page and component created was fully responsive and adaptable to any screen size, significantly enhancing the application's accessibility and user experience for over 1.8 million users.",
  'Led the implementation of a robust testing framework using Jest and Enzyme, raising the standard for code quality and reliability within the team.',
  'Technologies used: React Native, React Hooks, GraphQL, Styled Components.'
]

const inceresExperiences = [
  "Spearheaded the development of an intricate soil sample grid generation module, a pivotal feature in the company's precision agriculture solutions.",
  'Developed a dynamic map interface, enabling users to interactively draw polygons, create farms, and color the map based on soil samples. This novel feature significantly enhanced user experience and the overall utility of the product.',
  "Implemented a sophisticated color logic system that can alter the entire interface's colors based on three variables, providing a customizable user interface and improving accessibility.",
  "Built a Health Check app that significantly reduced error response time and bolstered system reliability, a critical upgrade for the system's architecture.",
  'Technologies used: React, Angular, Flask, Django, ElasticSearch, OpenLayers, and others.'
]

const languages = [
  'React JS',
  'React Hooks',
  'Styled Components',
  'React Query',
  'React Native',
  'Jest',
  'React Testing Library',
  'Playwright',
  'Responsive CSS',
  'CSS animations',
  'GraphQL',
  'Next JS'
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

  const renderCertificateLink = (where, when) => {
    return (
      <ExperienceTitle>
        <ExperienceText>
          <a href={when}>{where}</a>
        </ExperienceText>
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

  const isSmallScreen = window.innerWidth < sizes.mdScreen

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
          {renderTitle('Independent Projects')}
          {renderExperienceTitle('Kipkart App • 01/2020 - 06/2021', '')}
          {renderExperienceList(KipExperiences)}
          <Spacing />
          {renderTitle('Working Experience')}
          {renderExperienceTitle(
            'Front-end Tech Lead • Podopolo • 04/2023 - Today',
            ''
          )}
          {renderExperienceList(PodopoloExperiences)}
          {renderExperienceTitle(
            'Senior Front-end • Anytime Fitness • 05/2022 - 04/2023',
            ''
          )}
          {renderExperienceList(AFExperiences)}
          {renderExperienceTitle(
            'Senior Front-end • Loadsmart • 03/2021 - 05/2022',
            ''
          )}
          {renderExperienceList(LoadExperiences)}
          {renderExperienceTitle(
            'Front-end Tech Lead • Byne • 08/2020 - 03/2021',
            ''
          )}
          {renderExperienceList(ByneExperiences)}
          {renderExperienceTitle(
            'Senior Front-end • TradersClub • 04/2020 - 08/2020',
            ''
          )}
          {renderExperienceList(TCExperiences)}
          {renderExperienceTitle(
            'Front-end • Árvore Educação • 2019 - 04/2020',
            ''
          )}
          {renderExperienceList(arvoreExperiences)}
          {renderExperienceTitle('Front-end • Inceres • 2017 - 2019', '')}
          {renderExperienceList(inceresExperiences)}
          {renderExperienceTitle('Front-end Freelancer • 2015 - 2017', '')}
          {renderExperienceTitle('Intern Engineer • Setepla • 2014 - 2015', '')}
        </RightSectionContainer>
        <RightSectionContainer>
          {renderTitle('Licenses and Certificates')}
          {renderCertificateLink(
            'HackerRank Problem Solving Certificate',
            'https://www.hackerrank.com/certificates/b0a152a7246f'
          )}
          {renderCertificateLink(
            'Certified React Tester with Jest and Enzyme',
            'https://www.udemy.com/certificate/UC-1PQ4I2IK/'
          )}
          <Spacing />
          <Spacing />
          <ContactsSection>
            <Contacts>
              {renderTitle('Contacts')}
              {isSmallScreen ? (
                <>
                  {renderExperienceTitle('+55 32 999 711 797', '')}
                  {renderExperienceTitle('weissfrontend@gmail', '')}
                  {renderExperienceTitle('Rio, RJ - Brazil', '')}
                </>
              ) : (
                <>
                  {renderExperienceTitle('Phone', '+55 32 999 711 797')}
                  {renderExperienceTitle('Email', 'weissfrontend@gmail.com')}
                  {renderExperienceTitle(
                    'Location',
                    'Rio de Janeiro, RJ - Brazil'
                  )}
                </>
              )}
            </Contacts>
            <Education>
              {renderTitle('Education')}
              {renderExperienceTitle('Self-Taught', '')}
              {renderExperienceTitle('Udemy', '')}
              {renderExperienceTitle('Internet', '')}
            </Education>
          </ContactsSection>
        </RightSectionContainer>
        <RightSectionContainer>
          {renderTitle('Languages and Frameworks')}
          <LanguagesContainer>
            {languages.map((language, index) => {
              return <Language>{language}</Language>
            })}
          </LanguagesContainer>
        </RightSectionContainer>
      </RightSide>
    </CurriculumContainer>
  )
}

export default Curriculum
