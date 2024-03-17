import React, { FC } from 'react'
import { HeaderComponent, NinjaMain } from '../../widgets'
import { NavIdProps, Panel } from '@vkontakte/vkui';
import './Ninja.scss'

const Ninja: FC<NavIdProps> = ({ id }) => {

  return (
    <Panel id={id}>
      <HeaderComponent/>
      <NinjaMain/>
    </Panel>
  )
}

export {Ninja}