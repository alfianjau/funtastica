import React, { useState, useEffect, useReducer } from 'react'
import { Spinner } from 'react-rainbow-components'
// import { StoreContext } from '../../utils/store'
import debounce from 'lodash.debounce'
import axios from 'axios'
import { fetchSpecieses } from '../../utils/async'
import { fetchReducer } from '../../utils/reducer'
import { Link } from 'react-router-dom'
import { Button } from 'react-rainbow-components'
import Specieses from '../../components/particle/specieses'

function Races() {
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
    const debouncedFetchSpecieses = debounce(
      () => fetchSpecieses(query, dispatch, token),
      500
    )
    debouncedFetchSpecieses()
    return () =>
      cancel('No longer latest query') || debouncedFetchSpecieses.cancel()
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
        <Specieses articles={articles} />
      )}
    </div>
  )
}

export default Races
