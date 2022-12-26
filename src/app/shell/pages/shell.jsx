import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { ENDPOINTS } from '../../api'

export const Shell = () => {
  const [things, setThings] = useState([])

  const { isLoading: loading } = useQuery(
    ENDPOINTS.THINGS.list(),
    {
      onSuccess: (data) => setThings(data)
    }
  )

  return <>{loading ? 'loading' : JSON.stringify(things, null, 2)}</>
}
