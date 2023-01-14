import React from 'react'

import { CarouselItem } from './carousel.module.css'

import {
  Stack,
  Separator,
  Title,
  Container,
  Card,
  Symbol
} from '@wonderflow/react-components'

export const Carousel = ({ title, actions, children }) => {
  return (
    <Container dimension="medium">
      <Stack rowGap={16}>
        <Stack
          direction="row"
          fill={false}
          hAlign="space-between"
          hPadding={16}
        >
          <Title as="h3" level="3">
            {title}
          </Title>

          <Stack
            direction="row"
            fill={false}
            hPadding={8}
            vAlign="center"
            hAlign="end"
          >
            {actions}
          </Stack>
        </Stack>

        <Separator />

        <Stack
          direction="row"
          columnGap={16}
          fill={false}
          vAlign="center"
          hPadding={16}
        >
          {children}
        </Stack>
      </Stack>
    </Container>
  )
}

const Item = ({ label, icon, onClick }) => (
  <Card bordered={false} onClick={onClick} className={CarouselItem}>
    <Stack hAlign="center" rowGap={16}>
      <Symbol source={icon} dimension={32} />
      <Title as="h2" level="6">{label}</Title>
    </Stack>

  </Card>
)

Carousel.Item = Item
