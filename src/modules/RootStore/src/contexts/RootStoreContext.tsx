import { FC, PropsWithChildren, createContext } from "react";
import { RootStore, createRootStore } from "../rootStore";
import { useLocalObservable } from "mobx-react-lite";

export const RootStoreContext = createContext<RootStore | null>(null);

type RootStoreProviderProps = PropsWithChildren & { rootStore?: RootStore };
export const RootStoreProvider: FC<RootStoreProviderProps> = ({
  children,
  rootStore = createRootStore(),
}) => {
  const rootStoreObserved = useLocalObservable(() => rootStore);
  return (
    <RootStoreContext.Provider value={rootStoreObserved}>
      {children}
    </RootStoreContext.Provider>
  );
};
