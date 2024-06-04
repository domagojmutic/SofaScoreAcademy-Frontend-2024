export const isSameDay = (date_1: Date, date_2: Date) => {
  date_1.getDay()
  return (
    date_1.getFullYear() === date_2.getFullYear() &&
    date_1.getMonth() === date_2.getMonth() &&
    date_1.getDate() === date_2.getDate()
  )
}

export const getDayName = (day: number) => {
  switch (day) {
    case 0:
      return 'SUN'
    case 1:
      return 'MON'
    case 2:
      return 'TUE'
    case 3:
      return 'WED'
    case 4:
      return 'THU'
    case 5:
      return 'FRI'
    case 6:
      return 'SAT'
  }
}

export const addToDate = (
  date: Date,
  { years = 0, months = 0, days = 0 }: { years?: number; months?: number; days?: number }
) => {
  const temp = new Date(date)
  temp.setDate(temp.getDate() + days)
  temp.setMonth(temp.getMonth() + months)
  temp.setFullYear(temp.getFullYear() + years)
  return temp
}

export const removeDateTime = (date: Date) => {
  const temp = new Date(date)
  temp.setHours(0)
  temp.setMinutes(0)
  temp.setSeconds(0)
  temp.setMilliseconds(0)
  return temp
}

export const getDateString = (date: Date) => {
  return `${date.getFullYear()}-${date.toLocaleDateString('en', {
    month: '2-digit',
  })}-${date.toLocaleDateString('en', {
    day: '2-digit',
  })}`
}
