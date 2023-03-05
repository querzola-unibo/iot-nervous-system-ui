import React, { useState } from 'react'
import { useDebounce } from 'react-use'

import { SearchBar as SearchbarClass } from './search.module.css'
import { Textfield } from '@wonderflow/react-components'

export const Searchbar = ({
  query = '',
  setQuery,
  placeholder,
  ...otherProps
}) => {
  const [value, setValue] = useState(query)

  useDebounce(() => query !== value && setQuery(value), 500, [value])

  return (
    <Textfield
      className={SearchbarClass}
      iconPosition="left"
      icon="magnifying-glass"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...otherProps}
    />
  )
}
