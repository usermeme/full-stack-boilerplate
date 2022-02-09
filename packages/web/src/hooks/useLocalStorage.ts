import * as React from "react";
import * as localStorageConstants from "constants/localStorage";
import { UtilTypes } from "types";

const useLocalStorage = <TValue>(
  localStorageKey: UtilTypes.ObjectValues<typeof localStorageConstants>,
  defaultValue: TValue | null = null
): [TValue, React.Dispatch<React.SetStateAction<TValue>>] => {
  const [value, setValue] = React.useState<TValue>(() => {
    try {
      const storageValue = localStorage.getItem(localStorageKey);
      return storageValue ? JSON.parse(storageValue) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
