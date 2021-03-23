import { store } from "~src/Store/index";
import { Provider } from "react-redux";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <div style={{}}>
      <Provider store={store}>
        <Story />
      </Provider>
    </div>
  ),
];