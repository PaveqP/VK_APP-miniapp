import { createRoot } from 'react-dom/client';
import vkBridge from '@vkontakte/vk-bridge';
import { AppConfig } from '../app/AppConfig';

vkBridge.send('VKWebAppInit');

createRoot(document.getElementById('root')!).render(<AppConfig />);

import('../app/eruda');
