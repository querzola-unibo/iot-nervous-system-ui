import React from 'react'

import { Modal, InfoState, Button, Stack } from '@wonderflow/react-components'

import { ModalContainer } from './modal.module.css'

export const DeleteRoutineModal = ({ onDelete, onClose }) => (
  <Modal.Content className={ModalContainer} title="Delete">
    <Stack vPadding={24} hPadding={24} fill={false}>
      <InfoState
        icon="triangle-exclamation"
        iconColor="yellow"
        title="Delete routine"
        actions={(
          <>
            <Button onClick={onClose} kind="flat">
              Cancel
            </Button>
            <Button onClick={onDelete}>Delete</Button>
          </>
        )}
      >
        Are you sure you want delete this routine? This action cannot be
        reverted.
      </InfoState>
    </Stack>
  </Modal.Content>
)
