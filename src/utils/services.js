import request from './api'

// get films api
export function getFilms(query) {
  return request({
    url: `/films`,
    method: 'get',
    params: query,
  })
}
// get people api
export function getPeoples(query) {
  return request({
    url: `/people`,
    method: 'get',
    params: query,
  })
}
// get species api
export function getSpecieses(query) {
  return request({
    url: `/species`,
    method: 'get',
    params: query,
  })
}
// get location api
export function getLocations(query) {
  return request({
    url: `/locations`,
    method: 'get',
    params: query,
  })
}
// get vehicles api
export function getVehicles(query) {
  return request({
    url: `/vehicles`,
    method: 'get',
    params: query,
  })
}
