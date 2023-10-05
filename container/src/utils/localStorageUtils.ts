import { APP_NAME } from '@/constants';

export const getLocalStorageObjectValue = <T>(key: string | string[]): T | undefined => {
  //get value from local storage which the type of value is object
  try {
    if (window.localStorage.getItem(APP_NAME)) {
      const getItemValue: Record<string, T> = JSON.parse(window.localStorage.getItem(APP_NAME));
      if (key instanceof Array) {
        return key.reduce((result, item) => {
          return Object.assign(result, { [item]: getItemValue[item] });
        }, {} as T);
      }
      return getItemValue[key] || undefined;
    }
    return undefined;
  } catch (error) {
    console.error(
      `Error when get local storage object value function is triggered - LocalStorageUtils. ${error}`,
    );
  }

  return undefined;
};

export const setLocalStorageObjectItem = (value: object = {}): void => {
  //set object value to local storage
  try {
    const getItemValue: string = window.localStorage.getItem(APP_NAME) as string;

    const localStorageItem = JSON.parse(getItemValue);
    if (localStorageItem && typeof localStorageItem === 'object')
      return window.localStorage.setItem(
        APP_NAME,
        JSON.stringify({ ...localStorageItem, ...value }),
      );
    return window.localStorage.setItem(APP_NAME, JSON.stringify({ ...value }));
  } catch (error) {
    console.error(
      `Error when set local storage object item function is triggered - LocalStorageUtils. ${error}`,
    );
  }
};

export const removeLocalStorageObjectValue = (key: string | string[]): void => {
  //remove the existing value from the local storage's object.
  try {
    const getItemValue: any = window.localStorage.getItem(APP_NAME) as string;
    const localStorageItem = JSON.parse(getItemValue);
    if (localStorage && typeof localStorageItem === 'object') {
      if (typeof key === 'string') {
        delete localStorageItem[key as string];
      }

      if (key instanceof Array) key.forEach((item: string) => delete localStorageItem[item]);

      window.localStorage.setItem(APP_NAME, JSON.stringify(localStorageItem));
    }
  } catch (error) {
    console.error(
      `Error when remove local storage object item function is triggered - LocalStorageUtils. ${error}`,
    );
  }
};
