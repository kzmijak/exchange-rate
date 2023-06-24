import { RenderOptions, render, renderHook } from "@testing-library/react";
import {
  RootStore,
  RootStoreProvider,
  createRootStore,
} from "modules/RootStore";
import { JSX } from "react";

type Options = RenderOptions & { store?: Partial<RootStore> };
export const renderWithStore = (ui: JSX.Element, options: Options = {}) => {
  const { store = createRootStore() } = options;

  return render(
    <RootStoreProvider rootStore={store as RootStore}>{ui}</RootStoreProvider>,
    options
  );
};

export const renderHookWithStore = <TArgs, TReturn>(
  hook: (args: TArgs) => TReturn,
  options: Options = {}
) => {
  const { store = createRootStore() } = options;

  return renderHook(hook, {
    wrapper: ({ children }) => (
      <RootStoreProvider rootStore={store as RootStore}>
        {children}
      </RootStoreProvider>
    ),
    ...options,
  });
};
