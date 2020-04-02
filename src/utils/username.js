export const reducedUserName = userName => {
  let displayName = ''

  if (userName) {
    const names = userName.split(' ')
    displayName = names[0]

    if (names.length > 1) {
      displayName += ' ' + names[names.length - 1]
    }
  }

  return displayName
}
