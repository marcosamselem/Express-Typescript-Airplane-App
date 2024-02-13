// eslint-disable-next-line camelcase
import { Weather, Visibility } from './types'
// eslint-disable-next-line no-unused-expressions
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const isString = (string) => {
  return typeof string === 'string'
}
const isDate = (date) => {
  return Boolean(Date.parse(date))
}
const isWeather = (param) => {
  // eslint-disable-next-line camelcase
  return Object.values(Weather).includes(param)
}
const isVisibility = (param) => {
  // eslint-disable-next-line camelcase
  return Object.values(Visibility).includes(param)
}
const parseComment = (commentFromRequest) => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}
const parseDate = (dateFromRequest) => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}
const parseWeather = (weatherFromRequest) => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}
const parseVisibility = (visibilityFromRequest) => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}
const toNewDiaryEntry = (object) => {
  const newEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}
const _default = toNewDiaryEntry
export { _default as default }
