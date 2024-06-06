import { getDateString } from "@/utils/dateUtils"

export const sports = () => `http://localhost:3000/api/sports`
export const tournaments = (sport: string) => `http://localhost:3000/api/sport/${sport}/tournaments`
export const tournament = (id: string) => `http://localhost:3000/api/tournament/${id}`
export const tournamentEvents = (id: string, span: "last" | "next", page: number) => `http://localhost:3000/api/tournament/${id}/events/${span}/${page}`
export const events = (sport: string, date: Date) => `http://localhost:3000/api/sport/${sport}/events/${getDateString(date)}`
export const event = (id:string) => `http://localhost:3000/api/event/${id}`
export const eventIncidents = (id:string) => `http://localhost:3000/api/event/${id}/incidents`