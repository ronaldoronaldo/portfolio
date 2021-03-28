import {
  listEntitiesQuery,
  getParentsFromEntityTypeQuery,
  getEntityQuery,
  listUsersQuery
} from 'api/queries'

export const listEntities = (client, variables) => {
  return client
    .query({
      query: listEntitiesQuery,
      variables: {
        entityType: variables.entityType,
        rootStructure: variables.rootStructure
      },
      fetchPolicy: 'network-only'
    })
    .then(res => {
      const { listEntities } = res.data

      if (listEntities) return listEntities
    })
    .catch(err => {
      console.log(err)
    })
}

export const listUsers = (client, role) => {
  return client
    .query({
      query: listUsersQuery,
      variables: {
        role: role,
      },
      fetchPolicy: 'network-only'
    })
    .then(res => {
      const { listUsers } = res.data

      if (listUsers) return listUsers
    })
    .catch(err => {
      console.log(err)
    })
}

export const getParentsFromEntityType = (client, variables) => {
  return client
    .query({
      query: getParentsFromEntityTypeQuery,
      variables: {
        rootStructure: variables.rootStructure,
        entityType: variables.entityType
      },
      fetchPolicy: 'network-only'
    })
    .then(res => {
      const { getParentsFromEntityType } = res.data

      if (getParentsFromEntityType) return getParentsFromEntityType
    })
    .catch(err => {
      console.log(err)
    })
}

export const getEntity = (client, id) => {
  return client
    .query({
      query: getEntityQuery,
      variables: {
        entityId: id
      },
      fetchPolicy: 'network-only'
    })
    .then(res => {
      const { getEntity } = res.data
      console.log(res)
      if (getEntity) return getEntity
    })
    .catch(err => {
      console.log(err)
    })
}
