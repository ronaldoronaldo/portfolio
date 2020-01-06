import { gql } from 'apollo-boost'

export const availableProductsQuery = gql`
  query {
    me {
      availableProducts
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
