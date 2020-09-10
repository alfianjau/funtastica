import React, { useState, useEffect, useReducer } from 'react'
import { Spinner } from 'react-rainbow-components'
// import { StoreContext } from '../../utils/store'
import debounce from 'lodash.debounce'
import axios from 'axios'
import { fetchFilms } from '../../utils/async'
import { fetchReducer } from '../../utils/reducer'
import { Link } from 'react-router-dom'
import { Button } from 'react-rainbow-components'
import Articles from '../../components/particle/articles/index'

function Films() {
  const [{ articles, hasError, isLoading }, dispatch] = useReducer(
    fetchReducer,
    {
      articles: [],
      isLoading: true,
      hasError: false,
    }
  )

  const [query] = useState('')

  // watch input changes
  useEffect(() => {
    const { cancel, token } = axios.CancelToken.source()
    const debouncedFetchFilms = debounce(
      () => fetchFilms(query, dispatch, token),
      500
    )
    debouncedFetchFilms()
    return () =>
      cancel('No longer latest query') || debouncedFetchFilms.cancel()
  }, [query])

  return (
    <div>
      <Button
        label="Button Border"
        variant="neutral"
        className="rainbow-m-around_medium"
      >
        <Link to="/">Back to Home</Link>
      </Button>
      {hasError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <Spinner variant="brand" />
      ) : (
        <Articles articles={articles} />
      )}
    </div>
  )
}

export default Films
