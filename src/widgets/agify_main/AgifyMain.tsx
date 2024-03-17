import React from 'react'
import { AgifyForm } from '../../features'
import { Group } from '@vkontakte/vkui';
import './AgifyMain.scss'

function AgifyMain() {
  return (
    <Group className='agifyMain'>
      <AgifyForm/>
    </Group>
  )
}

export {AgifyMain}