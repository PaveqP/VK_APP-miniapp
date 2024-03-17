import React from 'react'
import { Button, Group } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import '@vkontakte/vkui/dist/vkui.css';
import './Header.scss'

function HeaderComponent() {
  const routeNavigator = useRouteNavigator();

  return (
    <Group className='header'>
      <div className="header__navigation">
          <Button className='navigation-task' size='l' onClick={() => routeNavigator.backToFirst()}>Задание 1</Button>
          <Button className='navigation-task' size='l' onClick={() => routeNavigator.push('/getAge')}>Задание 2</Button>
      </div>
    </Group>
  )
}

export {HeaderComponent}
