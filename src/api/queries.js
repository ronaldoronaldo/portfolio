import { gql } from 'apollo-boost'

export const userSessionValidationQuery = gql`
  query {
    me {
      products {
        isActive
        name
      }
      name
      email
      role
      paymentInfo {
        date
        required
      }
    }
  }
`

export const getTeachinMaterialsDataQuery = gql`
  query {
    readingProjects(limit: 20) {
      image
      id
    }
    teachingMaterial(limit: 10) {
      highSchool {
        degrees
        icon
        id
        link
        opId
        subtitle
        title
      }
      kinderGarden {
        degrees
        icon
        id
        link
        opId
        subtitle
        title
      }
      sensiveThemes {
        degrees
        icon
        id
        link
        opId
        subtitle
        title
      }
    }
  }
`

export const getBooksAndNewsQuery = gql`
  query {
    contentsArvore: contents(platform: ARVORE, limit: 10) {
      highlights {
        id
        image
        slug
        subtitle
        title
      }
      lastViewedBook {
        categoryIds
        title
      }
    }
    contentsGuten: contents(platform: GUTEN, limit: 10) {
      highlights {
        id
        image
        slug
        subtitle
        title
      }
      lastViewedBook {
        categoryIds
        title
      }
    }
  }
`

export const getBooksAndNewsRecommendationsQuery = gql`
  query recommendations(
    $categoryIdsArvore: Int!
    $categoryIdsGuten: Int!
    $termArvore: String!
    $termGuten: String!
  ) {
    recommendationsForGuten: recommendations(
      categoryIds: $categoryIdsArvore
      term: $termArvore
      platform: ARVORE
      limit: 10
    ) {
      id
      image
      slug
      subtitle
      title
    }
    recommendationsForArvore: recommendations(
      categoryIds: $categoryIdsGuten
      term: $termGuten
      platform: GUTEN
      limit: 10
    ) {
      id
      image
      slug
      subtitle
      title
    }
  }
`

export const getArvoreRecommendationsQuery = gql`
  query recommendations($categoryIdsGuten: Int!, $termGuten: String!) {
    recommendationsForArvore: recommendations(
      term: $termGuten
      categoryIds: $categoryIdsGuten
      platform: GUTEN
      limit: 10
    ) {
      id
      image
      slug
      subtitle
      title
    }
  }
`

export const getGutenRecommendationsQuery = gql`
  query recommendations($categoryIdsArvore: Int!, $termArvore: String!) {
    recommendationsForGuten: recommendations(
      term: $termArvore
      categoryIds: $categoryIdsArvore
      platform: ARVORE
      limit: 10
    ) {
      id
      image
      slug
      subtitle
      title
    }
  }
`

export const getHomeDataQuery = gql`
  query {
    me {
      role
    }
  }
`

export const usersQuery = gql`
  query users($limit: Int!) {
    users(limit: $limit)
  }
`

export const listEntitiesQuery = gql`
  query listEntities($entityType: String!, $rootStructure: String!) {
    listEntities(entityType: $entityType, rootStructure: $rootStructure)
  }
`

export const getEntityQuery = gql`
  query getEntity($entityId: Int!) {
    getEntity(entityId: $entityId) {
      ancestry
      entityType
      grade
      name
      rootId
      rootStructure
      inep
    }
  }
`

export const listUsersQuery = gql`
  query listUsers($role: String!) {
    listUsers(role: $role) {
      userName
      entityNames
      parentName
    }
  }
`

export const getParentsFromEntityTypeQuery = gql`
  query getParentsFromEntityType(
    $rootStructure: String!
    $entityType: String!
  ) {
    getParentsFromEntityType(
      rootStructure: $rootStructure
      entityType: $entityType
    ) {
      name
      id
    }
  }
`

export const trademarksQuery = gql`
  query trademarks($limit: Int!) {
    trademarks(limit: $limit)
  }
`

export const schoolsQuery = gql`
  query schools($limit: Int!) {
    schools(limit: $limit)
  }
`

export const schoolClassesQuery = gql`
  query schoolClasses($limit: Int!) {
    schoolClasses(limit: $limit)
  }
`

export const sendPasswordRecoveryEmailQuery = gql`
  query tokenAccountRecovery($email: String!) {
    tokenAccountRecovery(email: $email)
  }
`

export const validationTokenAccountRecoveryQuery = gql`
  query validationTokenAccountRecovery($email: String!, $token: String!) {
    validationTokenAccountRecovery(email: $email, token: $token)
  }
`

export const getContents = gql`
  query contents($platform: String!, $limit: Int!) {
    contents(platform: $platform, limit: $limit) {
      highlights {
        id
        image
        slug
        subtitle
        title
      }
      lastViewedBook {
        categoryIds
        title
      }
    }
  }
`

export const getContentDetails = gql`
  query contentDetails($contentId: Int!, $platform: String!) {
    contentDetails(contentId: $contentId, platform: $platform) {
      author
      categoryIds
      degrees
      description
      editorial
      id
      image
      link
      publishedAt
      publisher
      title
    }
  }
`

export const getRecommendations = gql`
  query recommendations(
    $categoryIds: Int!
    $platform: String!
    $term: String!
    $limit: Int!
  ) {
    recommendations(
      categoryIds: $categoryIds
      platform: $platform
      limit: $limit
      term: $term
    ) {
      id
      image
      slug
      subtitle
      title
    }
  }
`
