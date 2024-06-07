export interface Country {
  id: 0
  name: string
}

export interface Sport {
  id: number
  name: string
  slug: string
}

export interface Team {
  id: 0
  name: string
  country: Country
  managerName: string
  venue: string
}

export interface Tournament {
  id: number
  name: string
  slug: string
  sport: Sport
  country: Country
}

export interface Match {
  id: number
  slug: string
  tournament: Tournament
  homeTeam: Omit<Team, 'managerName' | 'venue'>
  awayTeam: Omit<Team, 'managerName' | 'venue'>
  status: 'notstarted' | 'inprogress' | 'finished'
  startDate: string
  homeScore: {
    total: number | null
    period1: number | null
    period2: number | null
    period3: number | null
    period4: number | null
    overtime: number | null
  }
  awayScore: {
    total: number | null
    period1: number | null
    period2: number | null
    period3: number | null
    period4: number | null
    overtime: number | null
  }
  winnerCode: 'home' | 'away' | 'draw' | null
  round: number
}

export interface Player {
  id: number
  name: string
  slub: string
  country: Country
  position: string
}

export interface CardIncident {
  player: Player
  teamSide: 'home' | 'away'
  color: 'yellow' | 'yellowred' | 'red'
  id: number
  time: number
  type: 'card'
}

export interface GoalIncident {
  player: Player
  scoringTeam: 'home' | 'away'
  homeScore: number
  awayScore: number
  goalType:
    | 'regular'
    | 'owngoal'
    | 'penalty'
    | 'onepoint'
    | 'twopoint'
    | 'threepoint'
    | 'touchdown'
    | 'safety'
    | 'fieldgoal'
    | 'extrapoint'
  id: number
  time: number
  type: 'goal'
}

export interface PeriodIncident {
  text: string
  id: number
  time: number
  type: 'period'
}

export type EventIncident = CardIncident | GoalIncident | PeriodIncident

export interface Standings {
  id: number
  tournament: Tournament
  type: 'home' | 'away' | 'total'
  sortedStandingsRows: {
    id: number
    team: Team
    points: number
    scoresFor: number
    scoresAgainst: number
    played: number
    wins: number
    draws: number
    losses: number
    percentage: number
  }[]
}
