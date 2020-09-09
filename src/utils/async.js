// import * as ghibli from './services'
import axios from 'axios'
const BASE_URL = 'https://ghibliapi.herokuapp.com'

// create async function for axios instance
export async function fetchFilms(query, dispatch, cancelToken) {
  dispatch({ type: 'FETCH_START' })
  try {
    const result = await axios(`${BASE_URL}/films`, { cancelToken })
    dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
  } catch (err) {
    console.error(err)
    axios.isCancel(err) || dispatch({ type: 'FETCH_FAILURE' })
  }
}

/* export async function fetchFilms(query, dispatch) {
  dispatch({ type: 'FETCH_START' })
  try {
    const result = await ghibli.getFilms({ query })
    dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
  } catch (err) {
    console.error(err)
    axios.isCancel(err) || dispatch({ type: 'FETCH_FAILURE' })
  }
} */
