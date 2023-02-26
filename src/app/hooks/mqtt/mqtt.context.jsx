import { createContext, useContext } from 'react'

const defaultValue = {
  selectedFilters: [],
  filters: [],
  onSelectFilter: () => {},
  onSelectAllFilters: () => {},
  onRemoveAllFilters: () => {}
}

const MqttContext = createContext(defaultValue)

const useMqttContext = () => useContext(MqttContext)

export { useMqttContext, MqttContext }
