import template from 'lodash.template'

const MQTT_BROKER_API = 'http://localhost:8081'

const createEndpoint = path => params => {
  const compiledPath = template(path)
  return `${MQTT_BROKER_API}/${compiledPath(params)}`
}

const ENDPOINTS = {
  THINGS: {
    create: createEndpoint('things'),
    delete: createEndpoint('things/<%= id %>'),
    list: createEndpoint('things'),
    update: createEndpoint('things/<%= id %>')
  },
  EVENTS: {
    list: createEndpoint('events'),
    get: createEndpoint('events/<%= type %>')
  }
}

const checkStatus = res => {
  if (res.status < 400) return res

  throw new Error(`Response status: ${res.status}`)
}

const getManagementApiClient = () => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  return {
    get: url =>
      fetch(url, {
        method: 'GET',
        headers
      }).then(checkStatus),
    post: (url, data = {}) =>
      fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      })
        .then(checkStatus)
        .then(d => d.json()),
    put: (url, data) =>
      fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
      })
        .then(checkStatus)
        .then(d => d.json()),
    delete: url =>
      fetch(url, {
        method: 'DELETE',
        headers: {}
      }).then(checkStatus)
  }
}

export { getManagementApiClient, ENDPOINTS }
