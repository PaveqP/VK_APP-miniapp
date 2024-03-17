import { View, SplitLayout, SplitCol} from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Agify, Ninja } from '../pages';
import { DEFAULT_VIEW_PANELS } from './routes';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.FACT } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <Ninja id="getFact" />
          <Agify id="getAge" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
