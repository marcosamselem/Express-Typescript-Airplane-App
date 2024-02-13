import { Weather, Visibility } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment?: string
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

// An interface is used so that then you can extend
// the interface itself and create a subinterface that gets all the data from the main interface plus whatever you wanna add
// An example would be:

// interface SpecialDiaryEntry extends DiaryEntry {
//   flightNumber: number
// }
