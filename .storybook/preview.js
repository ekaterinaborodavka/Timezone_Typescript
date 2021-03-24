import { store } from "~src/Store/index";
import { Provider } from "react-redux";

export const decorators = [
  (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
  ),
];