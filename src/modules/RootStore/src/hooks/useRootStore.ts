import { useContext } from "react";
import { RootStoreContext } from "../contexts/RootStoreContext";

export const useRootStore = () => {
  const rootStore = useContext(RootStoreContext);
  if (!rootStore) {
    throw new Error("useRootStore must be used within a RootStoreProvider");
  }
  return rootStore;
};
