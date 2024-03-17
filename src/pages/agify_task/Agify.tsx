import React, { FC } from 'react'
import { HeaderComponent, AgifyMain } from '../../widgets'
import { NavIdProps, Panel } from '@vkontakte/vkui';
import './Agify.scss'

const Agify: FC<NavIdProps> = ({ id }) => {

  return (
    <Panel id={id}>
      <HeaderComponent/>
      <AgifyMain/>
    </Panel>
  )
}

export {Agify}