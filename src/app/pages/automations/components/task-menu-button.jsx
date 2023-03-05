import React from 'react'

import { Popover, IconButton, Menu } from '@wonderflow/react-components'

export const TaskMenuButton = (props) => {
  return (
    <Popover
      trigger={<IconButton kind="flat" dimension="small" icon="more-vert" />}
    >
      <TaskMenu {...props} />
    </Popover>
  )
}

const TaskMenu = ({ item, onDelete, onEdit }) => {
  return (
    <Menu style={{ paddingLeft: 0 }}>
      <Menu.Item padding={false} onClick={() => onEdit(item.id)}>
        Edit
      </Menu.Item>
      <Menu.Item padding={false} onClick={() => onDelete(item.id)}>
        Delete
      </Menu.Item>
    </Menu>
  )
}
