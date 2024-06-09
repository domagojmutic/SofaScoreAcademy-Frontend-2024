export const getStandardCountryName = (country: string) => {
  switch (country) {
    case 'England':
      return 'United Kingdom'
    case 'USA':
      return 'United States'
    case 'Wales':
      return 'wa'
    case 'Scotland':
      return 'sx'
    case 'Bosnia & Herzegovina':
      return 'Bosnia and Herzegovina'
    case 'Northern Ireland':
      return 'nx'
    case 'Ivory Coast':
      return 'ci'
    case 'Iran':
      return 'ir'

    default:
      return country
  }
}
