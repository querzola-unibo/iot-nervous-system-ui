import React, { useMemo, useCallback, useState } from 'react'

import { TableCard as TableCardClass } from './automations.module.css'

import {
  Stack,
  Table,
  Elevator,
  Button,
  OverlayContainer,
  Modal
} from '@wonderflow/react-components'
import { TableCell } from '../../components'
import { TaskMenuButton } from './components/task-menu-button'
import { EmptyState } from './components/empty-state'
import { DeleteRoutineModal } from './components/delete-routine-modal'
import { EditRoutineModal } from './components/edit-routine-modal'

const DATA = [
  {
    id: '1',
    name: 'Wake up',
    createdBy: 'Manu'
  },
  {
    id: '2',
    name: 'Garden watering',
    createdBy: 'Someone'
  }
]

export const Automations = () => {
  const [modal, setModal] = useState(false)

  const onEdit = useCallback(
    (item) =>
      setModal({
        component: EditRoutineModal,
        props: {
          item,
          onEdit: () => {
            setModal(false)
          },
          onClose: () => setModal(false)
        }
      }),
    []
  )
  const onDelete = useCallback(
    (item) =>
      setModal({
        component: DeleteRoutineModal,
        props: {
          onDelete: () => {
            setModal(false)
          },
          onClose: () => setModal(false)
        }
      }),
    []
  )

  const taskActions = useMemo(() => ({ onEdit, onDelete }), [onEdit, onDelete])

  const columns = useMemo(
    () => [
      {
        id: 'actions',
        isCollapsed: true,
        isToggable: true,
        disableSortBy: true,
        accessor: (item) => <TaskMenuButton {...taskActions} item={item} />
      },
      {
        id: 'name',
        Header: 'Name',
        minWidth: '150px',
        disableSortBy: true,
        accessor: (item) => (
          <TableCell
            type="string"
            minWidth="140px"
            maxWidth="140px"
            values={item.name}
          />
        )
      },
      {
        id: 'createdBy',
        Header: 'Creator',
        minWidth: '150px',
        disableSortBy: true,
        accessor: (item) => (
          <TableCell
            type="string"
            minWidth="140px"
            maxWidth="140px"
            values={item.createdBy}
          />
        )
      }
    ],
    [taskActions]
  )

  return (
    <>
      <Stack vPadding={64}>
        <Elevator resting={1}>
          <div className={TableCardClass}>
            <Table
              data={DATA}
              columns={columns}
              title="Routines"
              showHeader
              emptyComponent={<EmptyState />}
              actions={<Button onClick={() => onEdit()}>Create routine</Button>}
              stripes
              showSeparators={false}
            />
          </div>
        </Elevator>
      </Stack>

      <OverlayContainer onClose={() => setModal(false)}>
        {modal && (
          <Modal closeOnClickOutside>
            <modal.component {...modal.props} />
          </Modal>
        )}
      </OverlayContainer>
    </>
  )
}
