import { FC, PropsWithChildren, createContext } from "react";
import { RootStore, createRootStore } from "../rootStore";
import { useLocalObservable } from "mobx-react-lite";

export const RootStoreContext = createContext<RootStore | null>(null);

type RootStoreProviderProps = PropsWithChildren;
export const RootStoreProvider: FC<RootStoreProviderProps> = ({ children }) => {
  const rootStore = useLocalObservable(createRootStore);
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
