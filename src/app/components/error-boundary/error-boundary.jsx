import React from 'react'
import { ErrorFallback } from '../'

export class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    console.error(error, errorInfo)
  }

  render () {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return <ErrorFallback />
    }

    return children
  }
}
