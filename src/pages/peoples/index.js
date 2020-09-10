import React, { useState, useEffect, useReducer } from 'react'
import { Spinner } from 'react-rainbow-components'
// import { StoreContext } from '../../utils/store'
import debounce from 'lodash.debounce'
import axios from 'axios'
import { fetchPeoples } from '../../utils/async'
import { fetchReducer } from '../../utils/reducer'
import { Link } from 'react-router-dom'
import { Button } from 'react-rainbow-components'
import Peoples from '../../components/particle/peoples'

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
    const debouncedFetchPeoples = debounce(
      () => fetchPeoples(query, dispatch, token),
      500
    )
    debouncedFetchPeoples()
    return () =>
      cancel('No longer latest query') || debouncedFetchPeoples.cancel()
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
        <Peoples articles={articles} />
      )}
    </div>
  )
}

export default Films
