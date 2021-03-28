import { gql } from 'apollo-boost'

export const authenticateWithProviderMutation = gql`
  mutation authenticateWithProvider(
    $deviceId: String!
    $deviceType: DeviceType!
    $provider: Provider!
    $token: String!
  ) {
    authenticateWithProvider(
      deviceId: $deviceId
      deviceType: $deviceType
      provider: $provider
      token: $token
    )
  }
`

export const signInOrGetUserMutation = gql`
  mutation signInOrGetUser(
    $deviceId: String!
    $deviceType: DeviceType!
    $identity: String!
  ) {
    signInOrGetUser(
      deviceId: $deviceId
      deviceType: $deviceType
      identity: $identity
    )
  }
`

export const signInWithPasswordMutation = gql`
  mutation signInWithPassword(
    $deviceId: String!
    $deviceType: DeviceType!
    $identity: String!
    $password: String!
  ) {
    signInWithPassword(
      deviceId: $deviceId
      deviceType: $deviceType
      identity: $identity
      password: $password
    )
  }
`

export const verifyTokenMutation = gql`
  mutation verifyToken($token: String!) {
    verifyToken(token: $token)
  }
`

export const updatePasswordRecoveryMutation = gql`
  mutation updatePasswordRecovery(
    $userId: Int!
    $password: String!
    $token: String!
  ) {
    updatePasswordRecovery(userId: $userId, password: $password, token: $token)
  }
`

export const createEntityMutation = gql`
  mutation($input: CreateEntityInput!) {
    createEntity(input: $input) {
      name
    }
  }
`

export const editEntityMutation = gql`
  mutation($input: EditEntityInput!) {
    editEntity(input: $input) {
      name
    }
  }
`
