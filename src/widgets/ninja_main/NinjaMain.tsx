import React from 'react'
import { NinjaDialog } from '../../features'
import { Group } from '@vkontakte/vkui';
import './NinjaMain.scss'

function NinjaMain() {
  return (
    <Group className='ninjaMain'>
      <NinjaDialog/>
    </Group>
  )
}

export {NinjaMain}