import React, { useState, useEffect, useReducer } from 'react'
import { Spinner } from 'react-rainbow-components'
import debounce from 'lodash.debounce'
import axios from 'axios'
import { fetchLocations } from '../../utils/async'
import { fetchReducer } from '../../utils/reducer'
import { Link } from 'react-router-dom'
import { Button } from 'react-rainbow-components'
import Locations from '../../components/particle/locations'

function Places() {
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
    const debouncedFetchLocations = debounce(
      () => fetchLocations(query, dispatch, token),
      500
    )
    debouncedFetchLocations()
    return () =>
      cancel('No longer latest query') || debouncedFetchLocations.cancel()
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
        <Locations articles={articles} />
      )}
    </div>
  )
}

export default Places
