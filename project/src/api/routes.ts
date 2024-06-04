import { getDateString } from "@/utils/dateUtils"

export const sports = () => `http://localhost:3000/api/sports`
export const tournaments = (sport: string) => `http://localhost:3000/api/sport/${sport}/tournaments`
export const events = (sport: string, date: Date) => `http://localhost:3000/api/sport/${sport}/events/${getDateString(date)}`
export const event = (id:string) => `http://localhost:3000/api/event/${id}`
export const eventIncidents = (id:string) => `http://localhost:3000/api/event/${id}/incidents`