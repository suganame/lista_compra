/* eslint-disable prettier/prettier */
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ListaContext = createContext({});

export function ListaProvider({children}) {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadList();
  }, []);

  async function loadList() {
    await AsyncStorage.getItem('purchaseList').then(data => {
      if (data) {
        let newList = JSON.parse(data);
        return setList(newList);
      }
      return setList([]);
    });
  }

  async function clearList() {
    await AsyncStorage.removeItem('purchaseList');
    loadList();
  }

  async function changeList(changedList) {
    setList(changedList);
    const jsonList = JSON.stringify(changedList);
    await AsyncStorage.setItem('purchaseList', jsonList);
  }

  return (
    <ListaContext.Provider
      value={{
        list,
        clearList,
        changeList,
      }}>
      {children}
    </ListaContext.Provider>
  );
}
