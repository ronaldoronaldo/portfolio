export const mapDegree = degree => {
  switch (degree) {
    case 'S':
    case 'T':
      return 'Professor'
    case 'F':
      return 'Não escolares'
    case 'EI':
      return 'Educação Infantil'
    case 'M':
      return 'Ensino Médio'
    case 'FM':
      return 'Ensino Fundamental'
    default:
      return `${degree}º ano`
  }
}

export const unMapDegree = degree => {
  switch (degree) {
    case 'Professor':
      return 'T'
    case 'Não escolares':
      return 'F'
    case 'Educação Infantil':
      return 'EI'
    case 'Ensino Médio':
      return 'M'
    case 'Ensino Fundamental':
      return 'FM'
    default:
      return degree.split('º')[0]
  }
}

export default mapDegree
