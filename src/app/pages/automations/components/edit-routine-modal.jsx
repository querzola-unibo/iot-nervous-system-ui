import React from 'react'

import { Modal, Button, Stack } from '@wonderflow/react-components'

import { ModalContainer } from './modal.module.css'

export const EditRoutineModal = ({ item, onClose, onSave }) => {
  return (
    <Modal.Content className={ModalContainer} title={item ? 'Edit' : 'Create'}>
      <Stack vPadding={24} hPadding={24} fill={false}>
        <Stack direction="row" hAlign="center" fill={false} columnGap={8}>
          <Button onClick={onClose} kind="flat">
            Cancel
          </Button>
          <Button onClick={onSave}>Save</Button>
        </Stack>
      </Stack>
    </Modal.Content>
  )
}
