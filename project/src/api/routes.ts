import { getDateString } from "@/utils/dateUtils"

export const sports = () => `http://localhost:3000/api/sports`
export const tournaments = (sport: string) => `http://localhost:3000/api/sport/${sport}/tournaments`
export const tournament = (id: string | number) => `http://localhost:3000/api/tournament/${id}`
export const tournamentEvents = (id: string | number, span: "last" | "next", page: number) => `http://localhost:3000/api/tournament/${id}/events/${span}/${page}`
export const tournamentStandings = (id: string|  number) => `http://localhost:3000/api/tournament/${id}/standings`
export const events = (sport: string, date: Date) => `http://localhost:3000/api/sport/${sport}/events/${getDateString(date)}`
export const event = (id:string | number) => `http://localhost:3000/api/event/${id}`
export const eventIncidents = (id:string | number) => `http://localhost:3000/api/event/${id}/incidents`
export const team = (id: string | number) => `http://localhost:3000/api/team/${id}`
export const teamPlayers = (id: string | number) => `http://localhost:3000/api/team/${id}/players`
export const teamEvents = (id: string | number, span: "last" | "next", page: number) => `http://localhost:3000/api/team/${id}/events/${span}/${page}`
export const teamTournaments = (id: string | number) => `http://localhost:3000/api/team/${id}/tournaments`
export const player = (id: string | number) => `http://localhost:3000/api/player/${id}`
export const playerEvents = (id: string | number, span: "last" | "next", page: number) => `http://localhost:3000/api/player/${id}/events/${span}/${page}`