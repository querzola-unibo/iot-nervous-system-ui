import React, { useMemo, useCallback } from 'react'
import moment from 'moment'

import { Text, Tooltip } from '@wonderflow/react-components'
import { Truncate } from './table-cell.module.css'

export const TableCell = ({
  type = 'string',
  values = [],
  query,
  bold = false,
  truncate = false,
  minWidth,
  maxWidth,
  textAlign
}) => {
  const style = useMemo(() => {
    const style = {}
    if (minWidth) {
      style.minWidth = minWidth
    }

    if (type === 'number') {
      style.textAlign = 'right'
      style.width = '100%'
    }

    if (maxWidth) {
      style.maxWidth = maxWidth
    }
    if (typeof textAlign === 'string') {
      style.textAlign = textAlign
    }

    return style
  }, [type, minWidth, maxWidth, textAlign])

  const printValue = useCallback(
    (value) => {
      if (!value || (Array.isArray(value) && !value.length)) {
        return '-'
      }

      if (query && type === 'string') {
        const queryRegExp = new RegExp(query, 'gi')
        const splittedValues = value.split(queryRegExp)

        if (!splittedValues.length) {
          return value
        }

        const initialQueryValues = [...value.matchAll(queryRegExp)]
        return splittedValues.reduce((acc, curr, currentIndex) => {
          if (currentIndex === 0 && curr === '') {
            acc.push(
              <mark key={currentIndex}>{initialQueryValues[currentIndex]}</mark>
            )
          } else if (
            currentIndex === splittedValues.length - 1 &&
            curr === ''
          ) {
            acc.push(
              <mark key={currentIndex}>{initialQueryValues[currentIndex]}</mark>
            )
          } else if (currentIndex === splittedValues.length - 1) {
            acc.push(curr)
          } else {
            acc.push(curr)
            acc.push(
              <mark key={currentIndex}>{initialQueryValues[currentIndex]}</mark>
            )
          }

          return acc
        }, [])
      }

      if (type === 'date') {
        return moment.utc(value).format('DD MMM YYYY')
      }

      if (type === 'number') {
        return value.toLocaleString('en-US')
      }

      return value
    },
    [query, type]
  )

  const content = useMemo(() => {
    if (!values || !Array.isArray(values) || !values.length) {
      return (
        <Text as={bold ? 'b' : 'p'} style={style}>
          {printValue(values)}
        </Text>
      )
    }

    return values.map((value, index) => (
      <Text key={index} as={bold ? 'b' : 'p'} style={style}>
        {printValue(value)}
      </Text>
    ))
  }, [values, printValue, style, bold])

  if (values && (!Array.isArray(values) || values.length) && truncate) {
    const truncatedContent = Array.isArray(values)
      ? (
          values.map((value, index) => (
            <Text key={index} className={Truncate} style={style}>
              {printValue(value)}
            </Text>
          ))
        )
      : (
        <Text as={bold ? 'b' : 'p'} className={Truncate} style={style}>
          {printValue(values)}
        </Text>
        )

    return (
      <Tooltip
        as={bold ? 'b' : 'p'}
        trigger={truncatedContent}
        placement="bottom"
      >
        {content}
      </Tooltip>
    )
  }

  return content
}
