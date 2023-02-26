import React, { useState, useEffect, useCallback } from 'react'

import * as mqtt from 'mqtt/dist/mqtt.min'

import { MqttContext } from '.'

const ROOT = 'iot-nervous-system'

export const MqttProvider = ({ children }) => {
  const [client, setClient] = useState()
  const [connectionStatus, setConnectionStatus] = useState(false)

  useEffect(() => {
    const options = {
      protocol: 'ws',
      keepalive: 20,
      clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8)
    }
    const client = mqtt.connect('mqtt://test.mosquitto.org:8081', options)

    setClient(client)

    client.on('connect', () => {
      setConnectionStatus(true)

      client.subscribe(`${ROOT}/#`, { qos: 0 }, (err, granted) => {
        if (err) {
          console.err(err)
        }
      })
    })

    client.on('message', (topic, payload, packet) => {
      console.log({ topic, payload, packet })
    })
  }, [])

  const publish = useCallback(({ roomId, deviceId, action, value }) => {
    console.log({ roomId, deviceId, action, value })
    const topic = `${ROOT}/${roomId}/${deviceId}/${value}`

    client.publish(topic, '')
  }, [client])
  return (
    <MqttContext.Provider value={{ client, publish, connectionStatus }}>
      {children}
    </MqttContext.Provider>
  )
}
