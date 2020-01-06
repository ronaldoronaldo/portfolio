import { createEntityMutation, editEntityMutation } from 'api/mutations'

const HAVE_PERMISSION = 'must be coordinator, director, or admin'

export const createEntity = (client, variables) => {
  return client
    .mutate({
      mutation: createEntityMutation,
      variables: {
        input: {
          name: variables.name,
          parentId: variables.parentId,
          grade: variables.grade,
          inep: variables.inep
        }
      }
    })
    .then(res => {
      if (res.data.createEntity) return true
    })
    .catch(err => {
      if (err.graphQLErrors) {
        const havePermission = err.graphQLErrors.find(
          graphqlError => graphqlError.message === HAVE_PERMISSION
        )

        if (havePermission) {
          return false
        }
      }
    })
}

export const editEntity = (client, variables) => {
  return client
    .mutate({
      mutation: editEntityMutation,
      variables: {
        input: {
          name: variables.name,
          parentId: variables.parentId,
          grade: variables.grade,
          inep: variables.inep,
          entityId: variables.entityId
        }
      }
    })
    .then(res => {
      if (res.data.editEntity) return true
    })
    .catch(err => {
      if (err.graphQLErrors) {
        const havePermission = err.graphQLErrors.find(
          graphqlError => graphqlError.message === HAVE_PERMISSION
        )

        if (havePermission) {
          return false
        }
      }
    })
}
