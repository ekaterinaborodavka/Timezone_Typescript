import { store } from "~src/Store/index";
import { Provider } from "react-redux";
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.dark,
});

export const decorators = [
  (Story) => (
      <Provider store={store}>
          <Story />
      </Provider>
  ),
];