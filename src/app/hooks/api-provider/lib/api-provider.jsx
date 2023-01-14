import { getManagementApiClient } from '../../../api'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const ApiProvider = ({ children }) => {
  const defaultQueryFn = async ({ queryKey }) => {
    const [url, queryParams = {}] = queryKey

    const validQueryParams = Object.keys(queryParams).reduce((acc, curr) => {
      if (queryParams[curr]) {
        return {
          ...acc,
          [curr]: queryParams[curr]
        }
      }
      return acc
    }, {})

    const urlQueryParams = new URLSearchParams(validQueryParams).toString()
    const response = await getManagementApiClient().get(
      `${url}?${urlQueryParams}`
    )

    return await response.json()
  }

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        queryFn: defaultQueryFn
      }
    }
  })

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}
